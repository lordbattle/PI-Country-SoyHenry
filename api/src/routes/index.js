const { Router } = require("express");
const countriesRouter = require("./countriesRouter");
const activitiesRouter = require("./activitiesRouter");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const mainRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

mainRouter.use("/countries", countriesRouter);
mainRouter.use("/activities", activitiesRouter);

module.exports = mainRouter;
