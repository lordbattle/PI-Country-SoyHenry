const { Router } = require("express");
const {
  getCountriesHandler,
  getCountriesIdHandler,
} = require("../handlers/countriesHandlers");
const countriesRouter = Router();

countriesRouter
  .get("/", getCountriesHandler)
  .get("/:idCountry", getCountriesIdHandler)

module.exports = countriesRouter;
