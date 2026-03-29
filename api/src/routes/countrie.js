const axios = require("axios");
const { Router } = require("express");
const { Op } = require("sequelize");

const {
  Country,
  TouristActivity,
  country_tourist_activity,
} = require("../db.js");

const router = Router();

router.get("/countries", async (req, res) => {
  try {
    const { name } = req.query;

    // optimization: check if database is empty using count (much faster than findAll)
    const count = await Country.count();
    
    if (count === 0) {
      console.log("Database empty. Fetching from external API...");
      const response = await axios.get(
        "https://restcountries.com/v3.1/all?fields=name,cca3,flags,continents,capital,subregion,area,population"
      );

      const countriesToCreate = response.data.map(c => ({
        id: c.cca3,
        name: c.name.common,
        flag: c.flags.png,
        continent: c.continents[0],
        capital: c.capital ? c.capital[0] : "No capital",
        subregion: c.subregion || "No subregion",
        area: c.area,
        population: c.population,
      }));

      // optimization: use bulkCreate for massive insertion (one single transaction)
      await Country.bulkCreate(countriesToCreate);
      console.log("Seeding complete.");
    }

    if (!name) {
      const order = req.query.order || "ASC";
      const countries = await Country.findAll({
        order: [["name", order]],
        include: { model: TouristActivity },
      });
      return res.json(countries);
    } else {
      const matchCountries = await Country.findAll({
        where: { name: { [Op.iLike]: `%${name}%` } },
        include: { model: TouristActivity } // optimization: include activities in search too
      });
      if (matchCountries.length === 0) {
        return res.status(404).json({ message: "THE COUNTRY DOES NOT EXIST" });
      }
      return res.json(matchCountries);
    }
  } catch (err) {
    console.error("Error in /countries route:", err.message);
    res.status(500).json({ error: err.message });
  }
});

router.post("/activity", async (req, res) => {
  try {
    const { name, difficulty, duration, season, arrayCountries } = req.body;
    let newActivity = await TouristActivity.create({
      name: name,
      difficulty: difficulty,
      duration: duration,
      season: season,
    });

    await newActivity.addCountry(arrayCountries);
    res.json(newActivity);
  } catch (err) {
    res.status(500).json;
  }
});

router.get("/countries/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let query = await Country.findByPk(id.toUpperCase(), {
      include: { model: TouristActivity },
    });
    res.json(query);
  } catch (err) {
    res.json("ID NOT FOUND");
  }
});

router.get("/population", async (req, res) => {
  try {
    let query = await Country.findAll({
      order: [["population", req.query.order]],
    });
    console.log(req.query.order);
    res.json(query);
  } catch (err) {
    res.json("NOT FOUND");
  }
});

module.exports = router;
