import express from "express";

const app = express();
const PORT = process.env.PORT || 3001;
const data = [
  { id: 1, likes: 0, comments: [] },
  { id: 2, likes: 0, comments: [] },
  { id: 3, likes: 0, comments: [] },
];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post(`/api/ideas/:id/likes`, (req, res) => {
  const { id } = req.params;
  const currentIdea = data.find((idea) => idea.id === parseInt(id));
  currentIdea.likes += 1;
  res.status(200).json(currentIdea);
});

app.post(`/api/ideas/:id/comments`, (req, res) => {
  const { id } = req.params;
  const { username, message } = req.body;
  const currentIdea = data.find((idea) => idea.id === parseInt(id));
  currentIdea.comments.push({ username, message });
  res.status(200).json(currentIdea);
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));
