const {
  getAllActivities,
  createNewActivity,
} = require("../controllers/activitiesControllers");
const Activity = require("../models/Activity");

// Get all activities
const getActivitiesHandler = async (req, res) => {
  try {
    const allActivities = await getAllActivities();
    res.status(200).json(allActivities);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Create activity
const postActivitiesHandler = async (req, res) => {
  const { name, difficulty, duration, season, countryId } = req.body;
  try {
    const seasonLowerCase = season.toLowerCase();
    //New activity
    await createNewActivity(
      name,
      difficulty,
      duration,
      seasonLowerCase,
      countryId
    );
    res.status(201).send("Activity created successfully!");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getActivitiesHandler,
  postActivitiesHandler,
};
