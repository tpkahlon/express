import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import routes from "./routes/routes";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://localhost/muft`, {
  // mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static(path.join(__dirname, `./build`)));

routes(app);

app.listen(PORT, console.log(`Running on port ${PORT}...`));
