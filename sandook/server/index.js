import express from "express";
import cors from "cors";
import path from "path";
import fetch from "node-fetch";

const getData = async (url, req, res) => {
  try {
    const response = await fetch(url);
    const html = await response.text();
    res.status(200).send(html);
  } catch (error) {
    res.status(400).send(error);
  }
};

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

app.get(`/api/channels/jaanmahal`, (req, res) => {
  getData("https://www.youtube.com/user/JASBIRSINGHMAHAL/videos", req, res);
});
app.get(`/api/channels/mahalvlogs`, (req, res) => {
  getData(
    "https://www.youtube.com/channel/UCVQeCeKArXApyD-RtYv2Wmw/videos",
    req,
    res
  );
});
app.get(`/api/channels/punjabivlogger`, (req, res) => {
  getData(
    "https://www.youtube.com/channel/UCsxwQDelM2MqEQL5E1L7mrw/videos",
    req,
    res
  );
});
app.get(`/api/channels/primeasia`, (req, res) => {
  getData(
    "https://www.youtube.com/channel/UCztSIZEGBfWfC3Mq63QXnsA/videos",
    req,
    res
  );
});
app.get(`/api/channels/jusreign`, (req, res) => {
  getData("https://www.youtube.com/user/JusReign/videos", req, res);
});
app.get(`/api/channels/aktv`, (req, res) => {
  getData("https://www.youtube.com/user/AKakaAmazing/videos", req, res);
});
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, `./build`, `index.html`), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(PORT, console.log(`Running on port ${PORT}...`));
