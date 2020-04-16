const express = require(`express`);
const path = require(`path`);
const routes = require(`./routes`);
const cookieSession = require("cookie-session");
const PORT = process.env.PORT || 3001;
const app = express();
const FeedbackService = require("./services/FeedbackService");
const SpeakerService = require("./services/SpeakerService");
const feedbackService = new FeedbackService(`./data/feedback.json`);
const speakerService = new SpeakerService(`./data/speakers.json`);

app.set(`view engine`, `ejs`);
app.set(`views`, path.join(__dirname, `./views`));
app.set(`trust proxy`, 1);
app.locals.siteName = `John Bakery Shop`;
app.use(express.static(path.join(__dirname, `./public`)));
app.use(async (req, res, next) => {
  try {
    const names = await speakerService.getNames();
    res.locals.speakerNames = names;
    next();
  } catch (err) {
    next(err);
  }
});
app.use(`/`, routes({ feedbackService, speakerService }));
app.use(
  cookieSession({
    name: "session",
    keys: [`asdasdasd`, `akjsdhakjsdhkjs`],
  })
);

app.listen(PORT, console.log(`Listening on port ${PORT}`));
