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

app.get('/api/animals/:page', function (req, res) {
  const { page } = req.params;
  (async () => {
    const URL = `https://www.oreilly.com/animals.csp?x-o=${page}`;
    const response = await fetch(URL);
    const text = await response.text();
    return text;
  })()
    .then((data) => res.status(200).send(JSON.stringify(data)))
    .catch((err) => res.status(400).json({ error: 'Network Error' }));
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, `./build`, `index.html`), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(PORT, console.log(`Running on port ${PORT}...`));
