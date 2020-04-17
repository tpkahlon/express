import {
  addProject,
  getProjects,
  getProject,
  updateProject,
  deleteProject,
} from "../controllers/controllers";

const routes = (app) => {
  app.route(`/projects`).get(getProjects).post(addProject);
  app
    .route(`/projects/:id`)
    .get(getProject)
    .put(updateProject)
    .delete(deleteProject);
};

export default routes;
