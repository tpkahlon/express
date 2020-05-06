import express from 'express';
import cors from 'cors';
import path from 'path';
import fetch from 'node-fetch';
import jsdom from 'jsdom';
import { uniqBy } from 'lodash';
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
    const wikiListRequest = await fetch(
      `https://en.wikipedia.org/wiki/List_of_news_channels_in_India`
    );
    const wikiListHTML = await wikiListRequest.text();
    const wikiListDOM = new JSDOM(wikiListHTML);
    const wikiListLinks = wikiListDOM.window.document.querySelectorAll('a');
    const wikiListNames = Array.from(wikiListLinks)
      .filter((i) => {
        return (
          !i.title.toLowerCase().includes(':') &&
          !i.title.toLowerCase().includes('mandatory') &&
          !i.title.toLowerCase().includes('support') &&
          !i.title.toLowerCase().includes('link') &&
          !i.title.toLowerCase().includes('list') &&
          !i.title.toLowerCase().includes('help') &&
          !i.title.toLowerCase().includes('template') &&
          !i.title.toLowerCase().includes('in india') &&
          !i.title.toLowerCase().includes('of india') &&
          !i.title.toLowerCase().includes('wikipedia') &&
          !i.title.toLowerCase().includes('portal') &&
          !i.title.toLowerCase().includes('category') &&
          !i.title.toLowerCase().includes('discussion') &&
          !i.title.toLowerCase().includes('visit') &&
          !i.title.toLowerCase().includes('find') &&
          !i.title.toLowerCase().includes('list') &&
          !i.title.toLowerCase().includes('about') &&
          !i.title.toLowerCase().includes('load') &&
          !i.title.toLowerCase().includes('upload') &&
          !i.title.toLowerCase().includes('page') &&
          !i.title.toLowerCase().includes('this') &&
          !i.title.toLowerCase().includes('scandal') &&
          i.title !== ''
        );
      })
      .map((i) => ({ name: i.title }));
    const channelPromises = wikiListNames.map(async (url) => {
      const customURL = url.name
        .toLowerCase()
        .replace(/[^\x00-\x7F]/g, '')
        .split(' ')
        .join('+');
      return await fetch(
        `https://www.youtube.com/results?search_query=${customURL}&sp=EgJAAQ%253D%253D`
      ).then((y) => y.text());
    });
    const channelResults = await Promise.all(channelPromises);
    let channelsLinks = channelResults.map((response) => ({ url: response }));
    // MERGE: https://stackoverflow.com/questions/46849286/merge-two-array-of-objects-based-on-a-key
    const revisedData = wikiListNames
      .map((item, i) => Object.assign({}, item, channelsLinks[i]))
      .sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1));
    const revisedWikiListNames = uniqBy(revisedData, 'name');
    return revisedWikiListNames;
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
