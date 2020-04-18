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
    { new: true },
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
