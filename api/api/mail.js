import { createTransport } from "nodemailer";

import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.post("/api/mail", async (req, res) => {
  const { email, number, message } = req.query;

  const transporter = createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL,
      pass: process.env.MAIL_APP_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.GMAIL,
    to: process.env.GMAIL,
    subject: "Message From portfolio",
    text: "",
    html: `<div>
      email: ${email} </br>
      number: ${number} </br>
      message: ${message} </br>
    <div>`,
  });

  res.send('ok')
});

export default app;
