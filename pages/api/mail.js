import ElasticMail from "nodelastic";
import * as dotenv from "dotenv";

dotenv.config();
const client = new ElasticMail(process.env.ELASTIC_WEB_API_KEY);

export default function handle(req, res) {
  client
    .send({
      from: "uandilearners@gmail.com",
      fromName: "UnI Learners",
      subject: "Response from unilearners.com form",
      msgTo: ["uandilearners@gmail.com"],
      bodyText: req.body,
    })
    .then((output) => {
      res.send(output);
    });
}
