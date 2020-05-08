import express from 'express';
import cors from 'cors';
import path from 'path';
import fetch from 'node-fetch';
import moment from 'moment';

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
    const now = `${moment().format('YYYYMMDD')}`;
    const urls = [
      `http://beta.ajitjalandhar.com/`,
      `http://beta.ajitjalandhar.com/edition/${now}/6.cms`,
      `http://beta.ajitjalandhar.com/edition/${now}/2.cms`,
      `http://beta.ajitjalandhar.com/edition/${now}/5.cms`,
      `http://beta.ajitjalandhar.com/edition/${now}/4.cms`,
      `http://beta.ajitjalandhar.com/edition/${now}/76.cms`,
      `http://beta.ajitjalandhar.com/edition/${now}/12.cms`,
      `http://beta.ajitjalandhar.com/edition/${now}/162.cms`,
      `http://beta.ajitjalandhar.com/edition/${now}/163.cms`,
      `http://beta.ajitjalandhar.com/edition/${now}/164.cms`,
      `http://beta.ajitjalandhar.com/edition/${now}/165.cms`,
      `http://beta.ajitjalandhar.com/edition/${now}/166.cms`,
      `http://beta.ajitjalandhar.com/edition/${now}/167.cms`,
    ];
    const promises = urls.map(
      async (url) => await fetch(url).then((y) => y.text())
    );
    const results = await Promise.all(promises).then((results) => results);
    return results;
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
