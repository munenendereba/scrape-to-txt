import express from "express";
import bodyParser from "body-parser";
import morganBody from "morgan-body";
import { configDotenv } from "dotenv";
import ParsePage from "./scraper.js";

const app = express();

configDotenv();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

morganBody(app);

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.get("/parse", ParsePage);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server running on port ${process.env.SERVER_PORT}`);
});
