import {
  addStation,
  getStations,
  getStation,
  updateStation,
  deleteStation,
  updateStationWithKey,
  deleteStationWithKey,
} from "../controllers/controllers";

const routes = (app) => {
  app.route(`/stations`).get(getStations).post(addStation);
  app.route(`/stations/:id`).get(getStation).put(updateStation);
  app
    .route(`/stations/:id/:passKey`)
    .put(updateStationWithKey)
    .delete(deleteStationWithKey);
};

export default routes;
