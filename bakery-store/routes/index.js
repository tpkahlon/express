const express = require("express");

const cooksRoute = require("./cooks");
const feedbackRoute = require("./feedback");

const router = express.Router();

module.exports = (params) => {
  router.get(`/`, (req, res) =>
    res.render(`pages/index`, { pageTitle: `Welcome | Devinder Bakery Store` })
  );
  router.use(`/cooks`, cooksRoute(params));
  router.use(`/feedback`, feedbackRoute(params));
  return router;
};
