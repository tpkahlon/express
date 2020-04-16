const express = require("express");

const router = express.Router();

module.exports = (params) => {
  const { speakerService } = params;
  router.get(`/`, async (req, res) => {
    const artwork = await speakerService.getAllArtwork();
    const speakers = await speakerService.getList();
    res.render(`layout`, {
      pageTitle: `Speakers`,
      template: `speakers`,
      speakers,
      artwork,
    });
  });
  router.get(`/:shortname`, async (req, res) => {
    const speaker = await speakerService.getSpeaker(req.params.shortname);
    const artwork = await speakerService.getArtworkForSpeaker(
      req.params.shortname
    );
    res.render(`layout`, {
      pageTitle: `Speaker`,
      template: `speaker-detail`,
      speaker,
      artwork,
    });
  });
  return router;
};
