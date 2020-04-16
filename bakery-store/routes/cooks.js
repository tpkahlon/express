const express = require("express");

const router = express.Router();

module.exports = (params) => {
  const { cooksService } = params;
  router.get(`/`, async (req, res) => {
    const cooks = await cooksService.getList();
    return res.json(cooks);
  });
  router.get(`/:name`, (req, res) =>
    res.send(`Details of ${req.params.name} page`)
  );
  return router;
};
