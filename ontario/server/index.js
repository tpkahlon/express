import express, { response } from "express";
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

const URLS = [
  `https://511on.ca/api/v2/get/cameras`,
  `https://511on.ca/api/v2/get/alerts`,
  `https://511on.ca/api/v2/get/seasonalloadapi`,
  `https://511on.ca/api/v2/get/roundabouts`,
  `https://511on.ca/api/v2/get/inspectionstations`,
  `https://511on.ca/api/v2/get/truckrestareas`,
  `https://511on.ca/api/v2/get/hovlanes`,
  `https://511on.ca/api/v2/get/informationcenter`,
  `https://511on.ca/api/v2/get/servicecentres`,
  `https://511on.ca/api/v2/get/ferryterminals`,
  `https://511on.ca/api/v2/get/carpoollots`,
  `https://511on.ca/api/v2/get/transithub`,
  `https://511on.ca/api/v2/get/roadconditions`,
  `https://511on.ca/api/v2/get/constructionprojects`,
  `https://511on.ca/api/v2/get/event`,
  `https://511on.ca/api/v2/get/groupedcameras`,
];

app.get("/api/data", function (req, res) {
  (async () => {
    try {
      (async () => {
        const responses = await Promise.all(
          URLS.map((url) => fetch(url).then((r) => r.json()))
        );
        const result = {
          cameras: responses[0],
          alerts: responses[1],
          loads: responses[2],
          roundabouts: responses[3],
          inspectionstations: responses[4],
          truckrestareas: responses[5],
          hovlanes: responses[6],
          informationcenter: responses[7],
          servicecentres: responses[8],
          ferryterminals: responses[9],
          carpoollots: responses[10],
          transithub: responses[11],
          roadconditions: responses[12],
          constructionprojects: responses[13],
          events: responses[14],
          groupedcameras: responses[15],
        };
        res.status(200).send(result);
      })();
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
