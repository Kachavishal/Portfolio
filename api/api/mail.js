import { createTransport } from "nodemailer";

const transporter = createTransport({
  service: "gmail",
  auth: {
    user: "vishalkacha740@gmail.com",
    pass: "dyii zpyx reqz hyfp",
  },
});

async function main() {
  const info = await transporter.sendMail({
    from: "vishalkacha740@gmail.com", // sender address
    to: "vishalkacha5@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
}

export default function handler(request, response) {
  main().catch(console.error);

  const { name = "World" } = request.query;

  return response.send(`Hello ${name}!`);
}
