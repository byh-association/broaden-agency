import React from "react";

import type { Email } from "../utils/mailer";

const CartSummaryEmail: Email = () => ({
  subject: "Thanks for your order",
  body: (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <p>Test email test</p>
      <div
        style={{
          height: "100px",
          width: "100px",
          backgroundColor: "#ff0000",
        }}
      />
    </div>
  ),
});

export default CartSummaryEmail;
