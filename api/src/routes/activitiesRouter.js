const { Router } = require("express");
const {
  getActivitiesHandler,
  postActivitiesHandler,
} = require("../handlers/activitiesHandlers");
const validateFormActivities = require("../middleware/validateFormActivities");
const validateUniqueActivityName = require("../middleware/validateUniqueActivityName");

const activitiesRouter = Router();

activitiesRouter.get("/", getActivitiesHandler);
activitiesRouter.post("/", validateFormActivities, validateUniqueActivityName, postActivitiesHandler);

module.exports = activitiesRouter;
