import { createTransport } from "nodemailer";

import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.post("/api/mail", async (req, res) => {
  let { email, number, message } = req.query;

  const transporter = createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL,
      pass: process.env.MAIL_APP_PASS,
    },
  });

  const info = await transporter.sendMail({
    from: process.env.GMAIL,
    to: process.env.GMAIL,
    subject: "Message From portfolio",
    text: "",
    html: `<div>
      email: ${email}
      number: ${number}
      message: ${message}
    <div>`,
  });
});

export default app;
