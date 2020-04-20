import {
  addStation,
  getStations,
  getStation,
  updateStation,
  deleteStation,
} from "../controllers/controllers";

const routes = (app) => {
  app.route(`/stations`).get(getStations).post(addStation);
  app.route(`/stations/:id`).get(getStation);
  app.route(`/stations/:id/:passKey`).put(updateStation).delete(deleteStation);
};

export default routes;
