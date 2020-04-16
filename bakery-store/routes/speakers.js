const express = require("express");

const router = express.Router();

module.exports = (params) => {
  const { speakerService } = params;
  router.get(`/`, async (req, res, next) => {
    try {
      const artwork = await speakerService.getAllArtwork();
      const speakers = await speakerService.getList();
      return res.render(`layout`, {
        pageTitle: `Speakers`,
        template: `speakers`,
        speakers,
        artwork,
      });
    } catch (err) {
      return next(err);
    }
  });
  router.get(`/:shortname`, async (req, res, next) => {
    try {
      const speaker = await speakerService.getSpeaker(req.params.shortname);
      const artwork = await speakerService.getArtworkForSpeaker(
        req.params.shortname
      );
      return res.render(`layout`, {
        pageTitle: `Speaker`,
        template: `speaker-detail`,
        speaker,
        artwork,
      });
    } catch (err) {
      return next(err);
    }
  });
  return router;
};
