import express from "express";
import cors from "cors";
import path from "path";
import fetch from "node-fetch";

const urlOne = "https://www.youtube.com/user/JASBIRSINGHMAHAL/videos";
const urlTwo =
  "https://www.youtube.com/channel/UCVQeCeKArXApyD-RtYv2Wmw/videos";
const urlThree =
  "https://www.youtube.com/channel/UCsxwQDelM2MqEQL5E1L7mrw/videos";
const urlFour =
  "https://www.youtube.com/channel/UCztSIZEGBfWfC3Mq63QXnsA/videos";
const urlFive = "https://www.youtube.com/user/JusReign/videos";
const urlSix = "https://www.youtube.com/user/AKakaAmazing/videos";
const app = express();
const PORT = process.env.PORT || 3001;
const router = express.Router();

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static(path.join(__dirname, `./build`)));

app.use(`/channels`, router, (req, res) => {
  const getData = async () => {
    try {
      const [one, two, three, four, five, six] = await Promise.all([
        fetch(urlOne),
        fetch(urlTwo),
        fetch(urlThree),
        fetch(urlFour),
        fetch(urlFive),
        fetch(urlSix),
      ]);
      const htmlOne = await one.text();
      const htmlTwo = await two.text();
      const htmlThree = await three.text();
      const htmlFour = await four.text();
      const htmlFive = await five.text();
      const htmlSix = await six.text();
      const videos = {
        one: htmlOne,
        two: htmlTwo,
        three: htmlThree,
        four: htmlFour,
        five: htmlFive,
        six: htmlSix,
      };
      res.status(200).send(videos);
    } catch (error) {
      res.status(400).send(error);
    }
  };
  getData();
});

app.listen(PORT, console.log(`Running on port ${PORT}...`));
