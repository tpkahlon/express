import express from "express";
import routes from "./src/routes/routes";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://localhost/usersdb`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`public`));

routes(app);

app.listen(PORT, () => console.log(`Server is running!`));
