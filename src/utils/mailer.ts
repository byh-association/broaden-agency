import type { SendMailOptions } from "nodemailer";
import type { Options as TransportOptions } from "nodemailer/lib/smtp-transport";
import Mailer from "nodemailer-react";
import type { ReactElement } from "react";

import CartSummaryEmail from "../mails/cart-summary";

const transport: TransportOptions = {
  host: import.meta.env.MAILER_SMTP_HOST,
  port: Number(import.meta.env.MAILER_SMTP_PORT),
  auth: {
    user: import.meta.env.MAILER_SMTP_USER,
    pass: import.meta.env.MAILER_SMTP_PASS,
  },
};

const defaults: SendMailOptions = {
  from: "info@broadency.com",
};

export type Email<T = object> = (props: T) => {
  subject: string;
  body: ReactElement;
};

export const mailer = Mailer(
  {
    transport,
    defaults,
  },
  { "cart-summary": CartSummaryEmail }
);
