const express = require("express");
const Joi = require("@hapi/joi");
const router = express.Router();
const data = require("../../data");
const uuid = require("uuid");

router.get(`/`, (req, res) => {
  res.send(data);
});

router.get(`/:id`, (req, res) => {
  const player = data.find((p) => p.id === Number(req.params.id));
  if (!player)
    return res
      .status(404)
      .send(`Player with ID ${req.params.id} does not exist.`);
  res.send(player);
});

router.post(``, (req, res) => {
  const { error } = validateObject(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const player = {
    id: uuid.v4(),
    name: req.body.name,
    date_of_birth: req.body.date_of_birth,
    skill: req.body.skill,
  };
  data.push(player);
  res.send(player);
});

router.put(`/:id`, (req, res) => {
  const player = data.find((p) => p.id === Number(req.params.id));
  const playerIndex = data.findIndex((p) => p.id === Number(req.params.id));
  if (!player)
    return res
      .status(404)
      .send(`Player with ID ${req.params.id} does not exist.`);
  const { error } = validateObject(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const { name, date_of_birth, skill } = req.body;
  data[playerIndex] = { ...player, name, date_of_birth, skill };
  res.send(data[playerIndex]);
});

router.delete(`/:id`, (req, res) => {
  const player = data.find((p) => p.id === Number(req.params.id));
  const playerIndex = data.findIndex((p) => p.id === Number(req.params.id));
  if (!player)
    return res
      .status(404)
      .send(`Player with ID ${req.params.id} does not exist.`);
  data.splice(playerIndex, 1);
  res.send(player);
});

const validateObject = (content) => {
  const now = Date.now();
  const cutoffDate = new Date(now - 1000 * 60 * 60 * 24 * 365 * 10); // go back by 10 years
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    date_of_birth: Joi.date().max(cutoffDate).required(),
    skill: Joi.string().min(5).required(),
  });
  return schema.validate(content);
};

module.exports = router;
