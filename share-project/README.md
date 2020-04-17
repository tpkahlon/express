# Share Projects

Add, Edit, Delete, View Project links.

## Stack

- React
- Express + Node
- Mongoose

## Features

- Add Project
- Delete Project
- Update Project
- Get Project(s)

## Plugins

- `babel-cli`
- `babel-preset-env`
- `babel-preset-stage-0`
- `cors`
- `nodemon`
- `esm`

## Demo

Live Demo: [View](https://tranquil-earth-44507.herokuapp.com/)

- Use `npm run dev` in `server` folder to run server
- Use `npm run start` in `client` folder to run client
- Create a `.env` file in `server` folder and set `MONGO_URI=` to your MongoDB Atlas cluster link

## Deployment

- Clone this repository
- Get into `server` folder, use `npm run compile` to generate build
- Make sure to update `env` file to point to your MongoDB Atlas cluster
- Use `heroku create` to create a new Heroku project
- Use git commands to add, commit files, push via `git push heroku master`
- Congratulations!
