import {
  addUser,
  getUsers,
  getUserWithID,
  updateUser,
  deleteUser,
} from "../controllers/controller";

const routes = (app) => {
  app
    .route(`/api/users`)
    .get((req, res, next) => {
      // console.log(`URL: ${req.originalUrl}`);
      // console.log(`Method: ${req.method}`);
      next();
    }, getUsers)
    .post(addUser);
  app
    .route(`/api/users/:id`)
    .get(getUserWithID)
    .put(updateUser)
    .delete(deleteUser);
};

export default routes;
