import mail from "@sendgrid/mail";

export default async function handler(req, res) {
  const text = req.body;

  mail.setApiKey(process.env.API_KEY);

  mail.send({
    from: "uandilearners@gmail.com",
    to: "uandilearners@gmail.com",
    subject: "Response from Website Form",
    text,
  });

  console.log("Email sent");
  res.status(200).json({ message: "Email sent" });
}
