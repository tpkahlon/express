const express = require("express");

const router = express.Router();

module.exports = () => {
  router.get(`/`, (req, res, next) => {
    try {
      return res.render(`layout`, {
        pageTitle: `Check our Menu`,
        template: `menu`,
      });
    } catch (err) {
      return next(err);
    }
  });
  return router;
};
