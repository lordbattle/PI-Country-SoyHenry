const axios = require("axios");
const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

//Go through Api bringing the necessary data
const mapCountryUrl = (e) => ({
  id: e.alpha3Code,
  name: e.name,
  flag: e.flags.png,
  continent: e.region,
  capital: e.capital ? e.capital : "Capital not found",
  subregion: e.subregion,
  area: e.area,
  population: e.population,
});

//Save data from API to DB
const saveAllCountriesDb = async () => {
  try {
    const peticion = (
      await axios.get("https://rest-countries.up.railway.app/v2/all")
    ).data;
    const allCountries = peticion.map(mapCountryUrl);
    const result = await Country.bulkCreate(allCountries, {
      ignoreDuplicates: true,
    });
    console.log("Countries saved:", result.length);
  } catch (error) {
    console.log({ error: "Failure to save countries in the db" });
  }
};

// Get all countries
const getAllCountries = async () => {
  const countries = await Country.findAll({
    include: {
      model: Activity,
      attributes: ["name"],
    },
  });
  return countries;
};

//Get countries by Id
const getCountryById = async (idCountry) => {
  const idUpperCase = idCountry.toUpperCase();
  return await Country.findByPk(idUpperCase, {
    include: {
      model: Activity,
      attributes: ["name", "difficulty", "duration", "season"],
    },
  });
};

//Get countries by name
const getCountryByName = async (name) => {
  return await Country.findAll({
    where: {
      name: { [Op.iLike]: "%" + name + "%" },
    },
    include: {
      model: Activity,
      attributes: ["name", "difficulty", "duration", "season"],
    },
  });
};

module.exports = {
  saveAllCountriesDb,
  getAllCountries,
  getCountryById,
  getCountryByName,
};
