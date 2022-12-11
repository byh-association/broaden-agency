import type { APIRoute } from "astro";
import fs from "fs";
import Handlebars from "handlebars";
import path from "path";

import type { Form } from "../../component/calculator";
import type { CartItemProps } from "../../component/calculator/components/cart-item";
import { config } from "../../config";
import { mailer } from "../../utils/mailer";

export interface SendCartSummaryDTO {
  contacts: Form["contacts"];
  cart: {
    items: CartItemProps[];
    summary: {
      prefix: CartItemProps["costPrefix"];
      number: number;
    };
  };
  questions: Form["questions"][keyof Form["questions"]][];
}

export const post: APIRoute = async (ctx) => {
  const body = (await ctx.request.json()) as SendCartSummaryDTO;
  const clientEmail = body.contacts.email;
  const currentYear = new Date().getFullYear();

  if (!body || !clientEmail) {
    return new Response(null, {
      status: 400,
      statusText: "No required data to proceed",
    });
  }

  const clientTemplate = fs.readFileSync(
    path.join(path.resolve(), "/src/mails/cart-summary-client.hbs"),
    "utf8"
  );
  const clientMailTemplate = Handlebars.compile(clientTemplate);
  const clientMailHTML = clientMailTemplate({
    year: currentYear,
    totalCartPrice: body.cart.summary,
    items: body.cart.items,
  });

  const clientResult = await mailer.sendMail({
    to: clientEmail,
    html: clientMailHTML,
    subject: "Your cart summary | BROADENCY",
  });

  if (!clientResult.accepted.includes(clientEmail)) {
    return new Response(null, {
      status: 500,
      statusText: "Something went wrong sending email to the client",
    });
  }

  const companyTemplate = fs.readFileSync(
    path.join(path.resolve(), "/src/mails/cart-summary-company.hbs"),
    "utf8"
  );
  const companyMailTemplate = Handlebars.compile(companyTemplate);
  const companyMailHTML = companyMailTemplate({
    year: currentYear,
    totalCartPrice: body.cart.summary,
    items: body.cart.items,
    contacts: body.contacts,
  });

  const companyResult = await mailer.sendMail({
    to: config.companyMail,
    html: companyMailHTML,
    subject: `You have new order from "${body.contacts.firstName} ${body.contacts.lastName}" | BROADENCY`,
  });

  if (!companyResult.accepted.includes(config.companyMail)) {
    return new Response(null, {
      status: 500,
      statusText: "Something went wrong sending email to the company address",
    });
  }

  return new Response(
    JSON.stringify({
      message: "The email have successfully sent",
      data: true,
    }),
    {
      status: 200,
    }
  );
};
