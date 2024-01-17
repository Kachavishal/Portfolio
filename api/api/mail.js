import { createTransport } from "nodemailer";

export default async function handler(request, response) {
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
    html: "<b>Hello world?</b>",
  });

  return response.send(process.env.GMAIL);
}
