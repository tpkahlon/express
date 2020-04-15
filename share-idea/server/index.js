import express from "express";
import { MongoClient, ObjectId } from "mongodb";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const withDB = async (operations, res) => {
  try {
    const client = await MongoClient.connect(`mongodb://localhost:27017`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db("ideas");
    const collection = db.collection("idea");
    await operations(db, collection);
    client.close();
  } catch (error) {
    res.status(500).json({ message: `Error connecting to database` });
  }
};

app.get(`/api/ideas`, async (req, res) => {
  withDB(async (db, collection) => {
    const result = await collection.find().toArray();
    res.status(200).json(result);
  }, res);
});

app.get(`/api/ideas/:id`, async (req, res) => {
  const { id } = req.params;
  withDB(async (db, collection) => {
    const result = await collection.findOne(ObjectId(id));
    res.status(200).json(result);
  }, res);
});

app.post(`/api/ideas/:id/likes`, async (req, res) => {
  const { id } = req.params;
  withDB(async (db, collection) => {
    const result = await collection.findOne(ObjectId(id));
    await collection.updateOne(result, {
      $set: {
        likes: result.likes + 1,
      },
    });
    const updatedIdea = await collection.findOne(ObjectId(id));
    res.status(200).json(updatedIdea);
  }, res);
});

app.post(`/api/ideas/:id/comments`, (req, res) => {
  const { id } = req.params;
  const { username, message } = req.body;
  withDB(async (db, collection) => {
    const result = await collection.findOne(ObjectId(id));
    await collection.updateOne(result, {
      $set: {
        comments: result.comments.concat({ username, message }),
      },
    });
    const updatedIdea = await collection.findOne(ObjectId(id));
    res.status(200).json(updatedIdea);
  }, res);
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));
