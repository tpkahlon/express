import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const StationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
  },
  dislikes: {
    type: Number,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});
