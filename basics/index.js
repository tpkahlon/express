import express from "express";

let data = [
  { id: 1, name: "Foo" },
  { id: 2, name: "Bar" },
];

const app = express();
const bodyParser = require('body-parser')

const PORT = 3001;

app.use(bodyParser.json())
// app.use(express.json())

app.use("/site", express.static("public"));

app.use("/files", express.static("files"));

app.get("/", (req, res) => res.send({ name: "Test" }));

const generateId = () => {
  const maxId = data.length > 0 ? Math.max(...data.map((n) => n.id)) : 0;
  return maxId + 1;
};

app.post("/api/items", (request, response) => {
  const body = request.body;
  if (!body.name) {
    return response.status(400).json({
      error: "content missing",
    });
  }
  const dataObj = {
    id: generateId(),
    name: body.name,
  };
  data = data.concat(dataObj);

  response.json(data);
});

app.get(
  "/api/items",
  (req, res, next) => {
    const requestedItem = data;
    if (requestedItem) {
      res.send(requestedItem);
      next();
    } else {
      res.status(404).end();
    }
  },
  () => {
    console.log(`Route handling when previous function finishes, I will run.`);
  }
);

app.get(
  "/api/items/:id",
  (req, res, next) => {
    const { id } = req.params;
    const requestedItem = data.find((i) => i.id === Number(id));
    if (requestedItem) {
      res.send(requestedItem);
      next();
    } else {
      res.status(404).end();
    }
  },
  () => {
    console.log(`Route handling when previous function finishes, I will run.`);
  }
);

app.delete(
  "/api/items/:id",
  (req, res, next) => {
    const { id } = req.params;
    const requestedItem = data.filter((i) => i.id !== Number(id));
    res.status(204).end();
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
