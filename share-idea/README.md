# Share Idea

## Demo

- [View Demo](https://go.aws/34QbTQl)

The demo instance will be active until April 14, 2020 because of AWS EC2 free-tier limitations.

## Features

- Client based on React
- Server based on Express
- Add likes on an idea
- Add comments on an idea
- Minimum CSS clutter, thanks to `Milligram`

## How to run this application

- Use `npm run dev` in `server` folder to run Express
- Make sure `MongoDB` is running on your device. Create a document named `ideas` in your local MongoDB daemon. Inside that document, create a collection named `idea` to make sure application server/client sync in properly. Use `Robo 3T` for better visualization of database
- For testing purposes, you can add a sample data in collection `idea` as follows:
- If you would like to make any changes in React application, use `npm run build` to build the revised application in `client` folder and replace the existing `build` folder in `server` directory with newer one

```javascript
// Use the database
use ideas;

// Populate the collection
db.idea.insert([{ name: "A", likes: 0, comments: [] }, { name: "B", likes: 1, comments: [ { username: "Joe", message: "Testing" } ] }])
```
