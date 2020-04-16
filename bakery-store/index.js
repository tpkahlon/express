const express = require(`express`);
const path = require(`path`);
const routes = require(`./routes`);
const cookieSession = require("cookie-session");
const PORT = process.env.PORT || 3001;
const app = express();
const FeedbackService = require("./services/feedbackService");
const CooksService = require("./services/cooksService");
const feedbackService = new FeedbackService(`./data/feedback.json`);
const cooksService = new CooksService(`./data/cooks.json`);

app.set(`view engine`, `ejs`);
app.set(`views`, path.join(__dirname, `./views`));
app.set(`trust proxy`, 1);
app.use(express.static(path.join(__dirname, "./public")));
app.use(`/`, routes({ feedbackService, cooksService }));
app.use(
  cookieSession({
    name: "session",
    keys: [`asdasdasd`, `akjsdhakjsdhkjs`],
  })
);

app.listen(PORT, console.log(`Listening on port ${PORT}`));
