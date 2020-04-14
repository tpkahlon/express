const express = require("express");
const exphbs = require("express-handlebars");
const data = require("./data");
const PORT = process.env.PORT || 3001;

const app = express();

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/players", require("./routes/api/Players"));

app.get(`/`, (req, res) => {
  res.render(`home`, {
    title: `Welcome to Fake Team`,
    data,
  });
});

app.listen(PORT, console.log(`Listening at port ${PORT}`));
