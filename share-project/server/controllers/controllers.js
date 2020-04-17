import mongoose from "mongoose";
import { ProjectSchema } from "../models/models";

const Project = mongoose.model("Project", ProjectSchema);

export const addProject = (req, res) => {
  let newProject = new Project(req.body);
  newProject.save((err, Project) => {
    if (err) {
      res.send(err);
    }
    res.json(Project);
  });
};

export const getProjects = (req, res) => {
  Project.find({}, (err, Project) => {
    if (err) {
      res.send(err);
    }
    res.json(Project);
  });
};

export const getProject = (req, res) => {
  let { id } = req.params;
  Project.findById(id, (err, Project) => {
    if (err) {
      res.send(err);
    }
    res.json(Project);
  });
};

export const updateProject = (req, res) => {
  let { id } = req.params;
  Project.findOneAndUpdate(
    { _id: mongoose.Types.ObjectId(id) },
    req.body,
    { new: true },
    (err, Project) => {
      if (err) {
        res.send(err);
      }
      res.json(Project);
    }
  );
};

export const deleteProject = (req, res) => {
  let { id } = req.params;
  Project.deleteOne({ _id: mongoose.Types.ObjectId(id) }, (err, Project) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: `Project deleted!` });
  });
};
