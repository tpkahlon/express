import express from "express";
import cors from "cors";
import path from "path";
import fetch from "node-fetch";

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

app.get("/api/data/:site", function (req, res) {
  const { site } = req.params;
  (async () => {
    try {
      const URLS = [
        `http://${site}/wp-json/wp/v2/posts`,
        `http://${site}/wp-json/wp/v2/categories`,
        `http://${site}/wp-json/wp/v2/tags`,
        `http://${site}/wp-json/wp/v2/pages`,
        `http://${site}/wp-json/wp/v2/comments`,
        `http://${site}/wp-json/wp/v2/taxonomies`,
        `http://${site}/wp-json/wp/v2/media`,
        `http://${site}/wp-json/wp/v2/users`,
        `http://${site}/wp-json/wp/v2/types`,
        `http://${site}/wp-json/wp/v2/statuses`,
        `http://${site}/wp-json/wp/v2/settings`,
        `http://${site}/wp-json/wp/v2/themes`,
        `http://${site}/wp-json/wp/v2/search`,
        `http://${site}/wp-json/wp/v2/blocks`,
        `http://${site}/wp-json/wp/v2/block-renderer`,
      ];
      const responses = await Promise.all(
        URLS.map((url) => fetch(url).then((r) => r.json()))
      );
      const result = {
        posts: responses[0],
        categories: responses[1],
        tags: responses[2],
        pages: responses[3],
        comments: responses[4],
        taxonomies: responses[5],
        media: responses[6],
        users: responses[7],
        types: responses[8],
        statuses: responses[9],
        settings: responses[10],
        themes: responses[11],
        search: responses[12],
        blocks: responses[13],
        blockRenderer: responses[14],
      };
      res.status(200).send(result);
    } catch (err) {
      res
        .status(400)
        .json({ error: "Something went wrong, please try again later." });
    }
  })();
});

// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, `./build`, `index.html`), (err) => {
//     if (err) {
//       res.status(500).send(err);
//     }
//   });
// });
// .

app.listen(PORT, console.log(`Running on port ${PORT}...`));
