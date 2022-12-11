import type { SendMailOptions } from "nodemailer";
import nodemailer from "nodemailer";
import type { Options as TransportOptions } from "nodemailer/lib/smtp-transport";
import type { ReactElement } from "react";

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

export const mailer = nodemailer.createTransport(transport, defaults);
