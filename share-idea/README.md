# Share Idea

## Features

- Client based on React
- Server based on Express
- Add likes on an idea
- Add comments on an idea

## How to run this application

- Use `npm run dev` in `server` folder to run Express
- Use `npm run start` in `client` folder to run Client
- Make sure `MongoDB` is running on your device. Create a document named `ideas` in your local MongoDB daemon. Inside that document, create a collection named `idea` to make sure application server/client sync in properly. Use `Robo 3T` for better visualization of database
- For testing purposes, you can add a sample data in collection `idea` as follows:

```javascript
// Use the database
use ideas;

// Populate the collection
db.idea.insert({ name: "A", likes: 0, comments: [] }, { name: "B", likes: 1, comments: [ { username: "Joe", message: "Testing" } ] })
```
