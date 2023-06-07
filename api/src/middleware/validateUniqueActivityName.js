const { Activity, Country } = require("../db");

const validateUniqueActivityName = async (req, res, next) => {
  const { name, countryId } = req.body;

  const findActivity = await Country.findOne({
    where: { id: countryId },
    include: [
      {
        model: Activity,
        where: { name: name },
      },
    ],
  });

  findActivity
    ? res.status(400).json({ error: "Activity already exists" })
    : next();
};

module.exports = validateUniqueActivityName;
