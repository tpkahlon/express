import express from 'express';
import cors from 'cors';
import path from 'path';
import fetch from 'node-fetch';

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

app.get('/api/search/:keyword', function (req, res) {
  const { keyword } = req.params;
  (async () => {
    const url = `https://www.reddit.com/subreddits/search.json?q=${keyword}`;
    const r = await fetch(url);
    const t = await r.json();
    return t;
  })()
    .then((d) => res.status(200).send(d))
    .catch(() => res.status(400).send({ message: 'Network error!' }));
});

app.get('/api/data/:keyword/:limit', function (req, res) {
  const { keyword, limit } = req.params;
  (async () => {
    const url = `https://www.reddit.com/r/${keyword}/new.json?limit=${limit}`;
    const r = await fetch(url);
    const t = await r.json();
    return t;
  })()
    .then((d) => res.status(200).send(d))
    .catch(() => res.status(400).send({ message: 'Network error!' }));
});

app.get('/api/data/prev/:keyword/:limit/:id', function (req, res) {
  const { keyword, limit, id } = req.params;
  (async () => {
    const url = `https://www.reddit.com/r/${keyword}/new.json?limit=${limit}&before=${id}`;
    const r = await fetch(url);
    const t = await r.json();
    return t;
  })()
    .then((d) => res.status(200).send(d))
    .catch(() => res.status(400).send({ message: 'Network error!' }));
});

app.get('/api/data/next/:keyword/:limit/:id', function (req, res) {
  const { keyword, limit, id } = req.params;
  (async () => {
    const url = `https://www.reddit.com/r/${keyword}/new.json?limit=${limit}&after=${id}`;
    const r = await fetch(url);
    const t = await r.json();
    return t;
  })()
    .then((d) => res.status(200).send(d))
    .catch(() => res.status(400).send({ message: 'Network error!' }));
});

app.listen(PORT, console.log(`Running on port ${PORT}...`));
