import type { Email } from "../utils/mailer";

const CartSummaryEmail: Email = () => ({
  subject: "Thanks for your order",
  body: (
    <html>
      <head>
        <style>
          {`
          * {
              "box-sizing": border-box;
              padding: 0;
              margin: 0;
              opacity: 0.5;
              border: 1px solid red;
          }
          `}
        </style>
      </head>
      <body>
        <table
          style={{
            padding: "48px 24px",
            backgroundColor: "#FAFAFA",
            maxWidth: "600px",
            width: "100%",
          }}
        >
          <tr>some test text. enjoy)))</tr>
        </table>
      </body>
    </html>
  ),
});

export default CartSummaryEmail;
