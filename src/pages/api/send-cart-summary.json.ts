import type { APIRoute } from "astro";

import type { Form } from "../../component/calculator";
import type { CartItemProps } from "../../component/calculator/components/cart-item";
import { mailer } from "../../utils/mailer";

export interface SendCartSummaryDTO {
  contacts: Form["contacts"];
  cart: {
    items: CartItemProps[];
    summary: string;
  };
  questions: Form["questions"][keyof Form["questions"]][];
}

export const post: APIRoute = async (ctx) => {
  const body = (await ctx.request.json()) as SendCartSummaryDTO;
  const clientEmail = body.contacts.email;

  if (!body || !clientEmail) {
    return new Response(null, {
      status: 400,
      statusText: "No required data to proceed",
    });
  }

  const clientResult = await mailer.send(
    "cart-summary",
    {},
    {
      to: clientEmail,
    }
  );

  if (!clientResult.accepted.includes(clientEmail)) {
    return new Response(null, {
      status: 500,
      statusText: "Something went wrong sending email",
    });
  }

  // TODO: Add sending email on company email address

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
