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

app.get('/api/data/:page', function (req, res) {
  const { page } = req.params;
  (async () => {
    const url = `https://steamcharts.com/top/p.${page}`;
    const r = await fetch(url);
    const t = await r.text();
    return t;
  })()
    .then((d) => res.status(200).send(d))
    .catch((e) => res.status(400).send({ message: 'Network error!' }));
});

// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, `./build`, `index.html`), (err) => {
//     if (err) {
//       res.status(500).send(err);
//     }
//   });
// });

app.listen(PORT, console.log(`Running on port ${PORT}...`));
