const {
  saveAllCountriesDb,
  getAllCountries,
  getCountryById,
  getCountryByName,
} = require("../controllers/countriesControllers");

//Save API data in the DB
saveAllCountriesDb();

const getCountriesHandler = async (req, res) => {
  const { name } = req.query;
  try {
    // Get all countries that contain part of the name
    if (name) {
      const countryByName = await getCountryByName(name);
      countryByName.length > 0
        ? res.status(200).json(countryByName)
        : res
            .status(404)
            .json({ error: "There is no countries with that name" });
    } else {
      // Get all countries
      const allCountries = await getAllCountries();
      res.status(200).json(allCountries);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Get countries by Id
const getCountriesIdHandler = async (req, res) => {
  const { idCountry } = req.params;
  try {
    const response = await getCountryById(idCountry);
    response === null
      ? res.status(400).json({ error: "There are no countries with that id" })
      : res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getCountriesHandler,
  getCountriesIdHandler,
};
