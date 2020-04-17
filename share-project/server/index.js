import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes/routes";

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://localhost/projectDB`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

app.listen(PORT, console.log(`Running on port ${PORT}...`));
