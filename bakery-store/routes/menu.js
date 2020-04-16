const express = require("express");

const router = express.Router();

module.exports = () => {
  router.get(`/`, (req, res) =>
    res.render(`layout`, {
      pageTitle: `Check our Menu`,
      template: `menu`,
    })
  );
  return router;
};
