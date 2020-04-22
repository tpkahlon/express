import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import fetch from "node-fetch";
import Scraper from "images-scraper";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
const router = express.Router();
const google = new Scraper({
  puppeteer: {
    headless: true,
  },
  tbs: {
    qdr: "d",
  },
});

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
