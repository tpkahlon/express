const express = require("express");

const cooksRoute = require("./cooks");
const feedbackRoute = require("./feedback");
const menuRoute = require("./menu");

const router = express.Router();

module.exports = (params) => {
  router.get(`/`, (req, res) =>
    res.render(`layout`, {
      pageTitle: `Welcome`,
      template: `index`,
    })
  );
  router.use(`/cooks`, cooksRoute(params));
  router.use(`/feedback`, feedbackRoute(params));
  router.use(`/menu`, menuRoute());
  return router;
};
