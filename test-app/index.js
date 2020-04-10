import express from "express";

const app = express();

const PORT = 3001;

app.use("/site", express.static("public"));

app.use("/files", express.static("files"));

app.get("/", (req, res) => res.send({ name: "Test" }));

app.listen(PORT, () => console.log(`Your API is running on port ${PORT}`));
