const express = require("express");

const speakersRoute = require("./speakers");
const feedbackRoute = require("./feedback");
const menuRoute = require("./menu");

const router = express.Router();

module.exports = (params) => {
  const { speakerService } = params;
  router.get(`/`, async (req, res, next) => {
    try {
      const artwork = await speakerService.getAllArtwork();
      const topSpeakers = await speakerService.getList();
      return res.render(`layout`, {
        pageTitle: `Welcome`,
        template: `index`,
        topSpeakers,
        artwork,
      });
    } catch (err) {
      return next(err);
    }
  });
  router.use(`/speakers`, speakersRoute(params));
  router.use(`/feedback`, feedbackRoute(params));
  router.use(`/menu`, menuRoute());
  return router;
};
