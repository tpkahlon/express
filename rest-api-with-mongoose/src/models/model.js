import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const userSchema = new Schema({
  name: {
    type: String,
    required: `Enter a name`,
  },
  age: {
    type: Number,
    required: `Enter an age`,
  },
  email: {
    type: String,
    required: `Enter an email`,
  },
  createdAt: {
    type: Date,
    required: `Enter a date of creation`,
  },
});
