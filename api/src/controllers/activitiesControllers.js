const { Activity } = require("../db");

// Get all activities
const getAllActivities = async () => {
  return await Activity.findAll();
};

// Creating a new activity
const createNewActivity = async (
  name,
  difficulty,
  duration,
  season,
  countryId
) => {
  const newActivity = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  });
  await newActivity.setCountries(countryId); //The activity is related to at least one country
  return newActivity;
};

module.exports = {
  getAllActivities,
  createNewActivity,
};
