import express from "express";
import cors from "cors";
import path from "path";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static(path.join(__dirname, `./build`)));

const URL = `https://511on.ca/api/v2/get/cameras`;

app.get("/api/cameras", function (req, res) {
  (async () => {
    try {
      // const promises = URLS.map((url) => fetch(url).then((y) => y.json()));
      // Promise.all(promises).then((results) => {
      //   setData({ ...data, locations: results, loading: false });
      // });
      const request = await fetch(URL);
      const json = await request.json();
      res.status(200).send(json);
    } catch (err) {
      res
        .status(400)
        .send({ error: "Something went wrong, please try again later." });
    }
  })();
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, `./build`, `index.html`), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(PORT, console.log(`Running on port ${PORT}...`));
