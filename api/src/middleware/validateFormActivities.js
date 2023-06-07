const validateFormActivities = (req, res, next) => {
  const { name, duration, season, countryId } = req.body;

  if (!name) return res.status(400).json({ error: "Missing name" });

  if (!duration) return res.status(400).json({ error: "Missing duration" });

  if (!season) return res.status(400).json({ error: "Missing season" });

  const arrSeason = ["summer", "autumn", "winter", "spring"];
  const findSeason = arrSeason.find((e) => e === season.toLowerCase());

  if (!findSeason)
    return res.status(400).json({
      error:
        "Season does not match any of the options: summer, autumn, winter or spring",
    });

  if (!countryId) return res.status(400).json({ error: "Missing countryId" });

  next();
};

module.exports = validateFormActivities;
