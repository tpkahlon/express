const express = require("express");

const speakersRoute = require("./speakers");
const feedbackRoute = require("./feedback");
const menuRoute = require("./menu");

const router = express.Router();

module.exports = (params) => {
  const { speakerService } = params;
  router.get(`/`, async (req, res) => {
    const artwork = await speakerService.getAllArtwork();
    const topSpeakers = await speakerService.getList();
    res.render(`layout`, {
      pageTitle: `Welcome`,
      template: `index`,
      topSpeakers,
      artwork,
    });
  });
  router.use(`/speakers`, speakersRoute(params));
  router.use(`/feedback`, feedbackRoute(params));
  router.use(`/menu`, menuRoute());
  return router;
};
