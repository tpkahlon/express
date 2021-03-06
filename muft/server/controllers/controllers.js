import mongoose from "mongoose";
import { StationSchema } from "../models/models";

const Station = mongoose.model("Station", StationSchema);

export const addStation = (req, res) => {
  let newStation = new Station(req.body);
  newStation.save((err, Station) => {
    if (err) {
      res.send(err);
    }
    res.json(Station);
  });
};

export const getStations = (req, res) => {
  Station.find({}, (err, Station) => {
    if (err) {
      res.send(err);
    }
    res.json(Station);
  });
};

export const getStation = (req, res) => {
  let { id } = req.params;
  Station.findById(id, (err, Station) => {
    if (err) {
      res.send(err);
    }
    res.json(Station);
  });
};

export const updateStation = (req, res) => {
  let { id } = req.params;
  Station.findOneAndUpdate(
    { _id: mongoose.Types.ObjectId(id) },
    req.body,
    { new: true, upsert: true },
    (err, Station) => {
      if (err) {
        res.send(err);
      }
      res.json(Station);
    }
  );
};

export const deleteStation = (req, res) => {
  let { id } = req.params;
  Station.deleteOne({ _id: mongoose.Types.ObjectId(id) }, (err, Station) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: `Station deleted!` });
  });
};

export const updateStationWithKey = (req, res) => {
  let { id, passKey } = req.params;
  if (passKey === process.env.PASS_KEY) {
    Station.findOneAndUpdate(
      { _id: mongoose.Types.ObjectId(id) },
      req.body,
      { new: true, upsert: true },
      (err, Station) => {
        if (err) {
          res.send(err);
        }
        res.json(Station);
      }
    );
  } else {
    res.json({ error: `Pass key is not valid. Please try again.` });
  }
};

export const deleteStationWithKey = (req, res) => {
  let { id, passKey } = req.params;
  if (passKey === process.env.PASS_KEY) {
    Station.deleteOne({ _id: mongoose.Types.ObjectId(id) }, (err, Station) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: `Station deleted!` });
    });
  } else {
    res.json({ error: `Pass key is not valid. Please try again.` });
  }
};
