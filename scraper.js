import axios from "axios";
import { load } from "cheerio";
import fs from "fs";
import path from "path";
import ScrapeUrl from "./scrape-url.js";

async function ParsePage(request, response) {
  //const url = ScrapeUrl.url;
  let url = "https://search.jesus-comes.com/index.php?title=HG1-";
  const start = 13;
  const end = 10;
  let actualStart = 1;
  for (let i = start; actualStart <= end; i++) {
    try {
      const response = await axios.get(url + i);
      const $ = load(response.data);

      //this is the title of the page

      const text = $("p")
        .first()
        .nextUntil("table")
        .map((i, e) => $(e).text())
        .toArray();

      console.log(text);
    } catch (error) {
      console.log("Error parsing page: " + error);
    }
    actualStart++;
  }

  response.status(200).send("OK");
}

export default ParsePage;
