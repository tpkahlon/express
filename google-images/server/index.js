import express from "express";
import cors from "cors";
import path from "path";
import Scraper from "images-scraper";

const app = express();
const PORT = process.env.PORT || 3001;
const router = express.Router();

// TO DO:
// &tbs=rltm:1 [real time results]
// &tbs=qdr:s [past second]
// &tbs=qdr:n [past minute]
// &tbs=qdr:h [past hour]
// &tbs=qdr:d [past 24 hours (day)]
// &tbs=qdr:w [past week]
// &tbs=qdr:m [past month]
// &tbs=qdr:y [past year]

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static(path.join(__dirname, `./build`)));

app.use(`/images/:keyword`, router, (req, res, next) => {
  const { keyword } = req.params;
  const { query } = req;
  const temp = {
    tbs: {
      ...(query.timeFilter === "realTime" && { rltm: 1 }),
      ...(query.timeFilter === "pastSecond" && { qdr: "s" }),
      ...(query.timeFilter === "pastMinute" && { qdr: "n" }),
      ...(query.timeFilter === "pastHour" && { qdr: "h" }),
      ...(query.timeFilter === "pastDay" && { qdr: "d" }),
      ...(query.timeFilter === "pastWeek" && { qdr: "w" }),
      ...(query.timeFilter === "pastMonth" && { qdr: "m" }),
      ...(query.timeFilter === "pastYear" && { qdr: "y" }),
    },
  };
  const google = new Scraper({
    puppeteer: {
      headless: true,
      args: ["--no-sandbox"],
    },
    tbs: {
      ...(query.timeFilter === "realTime" && { rltm: 1 }),
      ...(query.timeFilter === "pastSecond" && { qdr: "s" }),
      ...(query.timeFilter === "pastMinute" && { qdr: "n" }),
      ...(query.timeFilter === "pastHour" && { qdr: "h" }),
      ...(query.timeFilter === "pastDay" && { qdr: "d" }),
      ...(query.timeFilter === "pastWeek" && { qdr: "w" }),
      ...(query.timeFilter === "pastMonth" && { qdr: "m" }),
      ...(query.timeFilter === "pastYear" && { qdr: "y" }),
    },
  });
  (async () => {
    const results = await google.scrape(keyword, 100);
    if (results.length === 0) {
      res.json({ message: `No images found with the keyword provided.` });
      return;
    }
    return res.json(results);
  })();
});

app.listen(PORT, console.log(`Running on port ${PORT}...`));
