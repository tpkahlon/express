import express from "express";

const data = [
  { id: 1, name: "Foo" },
  { id: 2, name: "Bar" },
];

const app = express();

const PORT = 3001;

app.use("/site", express.static("public"));

app.use("/files", express.static("files"));

app.get("/", (req, res) => res.send({ name: "Test" }));

app.get(
  "/api/items/:id",
  (req, res, next) => {
    const { id } = req.params;
    const requestedItem = data.find((i) => i.id === Number(id));
    res.send(requestedItem);
    next();
  },
  () => {
    console.log(`Route handling when previous function finishes, I will run.`);
  }
);

app.get("/useless", (req, res) => res.end());

app.get("/fso", (req, res) => res.redirect(`https://tiny.cc/fsoen`));

app.get("/download", (req, res) => res.download(`files/index.txt`));

app
  .route("/user")
  .get((req, res) => res.send(`GET`))
  .post((req, res) => res.send(`POST`))
  .put((req, res) => res.send(`PUT`))
  .delete((req, res) => res.send(`DELETE`))
  .patch((req, res) => res.send(`PATCH`));

app.listen(PORT, () => console.log(`Your API is running on port ${PORT}`));
