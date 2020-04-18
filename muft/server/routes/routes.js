import {
  addStation,
  getStations,
  getStation,
  updateStation,
  deleteStation,
} from "../controllers/controllers";

const routes = (app) => {
  app.route(`/Stations`).get(getStations).post(addStation);
  app
    .route(`/Stations/:id`)
    .get(getStation)
    .put(updateStation)
    .delete(deleteStation);
};

export default routes;
