import { createTransport } from "nodemailer";

export default async function handler(request, response) {
  const transporter = createTransport({
    service: "gmail",
    auth: {
      user: "vishalkacha740@gmail.com",
      pass: "dyii zpyx reqz hyfp",
    },
  });

  const info = await transporter.sendMail({
    from: "vishalkacha740@gmail.com", // sender address
    to: "vishalkacha5@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log(info.messageId);

  const { name = "World" } = request.query;

  return response.send(`hello`);
}
