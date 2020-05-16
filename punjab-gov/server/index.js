import express from 'express';
import cors from 'cors';
import path from 'path';
import fetch from 'node-fetch';
import jsdom from 'jsdom';
const { JSDOM } = jsdom;

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

app.get('/api/data', function (req, res) {
  (async () => {
    const scrapeSite = async () => {
      const url = `https://punjab.gov.in/districts-of-punjab/`;
      const r = await fetch(url);
      const t = await r.text();
      const dom = new JSDOM(t);
      const links = dom.window.document.querySelectorAll('area');
      const source = [
        ...new Set(
          Array.from(links)
            .filter((i) => i.getAttribute('href') !== '#')
            .map((i) =>
              i
                .getAttribute('href')
                .replace('http://', 'https://')
                .replace('.in/', '.in')
                .replace('www.', '')
            )
            .sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1))
        ),
      ];
      return source;
    };
    const result = [];
    const source = await scrapeSite();
    const statusCode = await Promise.all(
      source.map((url) => {
        const status = (async () => {
          const r = await fetch(url);
          return r.ok;
        })()
          .then((d) => d)
          .catch(() => false);
        return status;
      })
    );
    source.map((i, index) =>
      result.push({ source: i, status: statusCode[index] })
    );
    return result;
  })()
    .then((d) => res.status(200).send(d))
    .catch(() => res.status(400).send({ message: 'Network error!' }));
});

// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, `./build`, `index.html`), (err) => {
//     if (err) {
//       res.status(500).send(err);
//     }
//   });
// });

app.listen(PORT, console.log(`Running on port ${PORT}...`));
