import mongoose from "mongoose";
import { userSchema } from "../models/model";

const User = mongoose.model(`User`, userSchema);

export const addUser = (req, res) => {
  let newUser = new User(req.body);

  newUser.save((err, user) => {
    if (err) res.send(err);
    res.json(user);
  });
};

export const getUsers = (req, res) => {
  User.find({}, (err, user) => {
    if (err) res.send(err);
    res.json(user);
  });
};

export const getUserWithID = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) res.send(err);
    res.json(user);
  });
};

export const updateUser = (req, res) => {
  User.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    req.body,
    {
      new: true,
      useModifyAndFind: false,
    },
    (err, user) => {
      if (err) res.send(err);
      res.json(user);
    }
  );
};

export const deleteUser = (req, res) => {
  User.remove(
    {
      _id: req.params.id,
    },
    (err) => {
      if (err) res.send(err);
      res.json({
        message: `User has been deleted.`,
      });
    }
  );
};
