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
    const { activity } = req.query;

    let countries = await Country.findAll();
    if (countries.length === 0) {
      countries = await axios.get(`https://restcountries.com/v2/all`);
      //countries = await axios.get(`https://restcountries.com/v3.1/all`);
      
      console.log(countries.data.name);
      
      countries.data.map(async (c) => {
        await Country.create({
          id: c.alpha3Code,
          name: c.name,
          flag: c.flag,
          continent: c.region,
          capital: c.capital,
          subregion: c.subregion,
          area: c.area,
          population: c.population,
        });
      });
    }

    if (!name) {
      const countrie = await Country.findAll({
        order: [["name", req.query.order]],
        include: { model: TouristActivity}
      });
      res.json(countrie);
      //console.log(countrie);
    } else {
      const matchCountrie = await Country.findAll({
        where: { name: { [Op.iLike]: `%${name}%` } },
      });
      if (matchCountrie.length === 0) {
        res.json({ message: "THE COUNTRY DOES NOT EXIST" });
      } else {
        res.json(matchCountrie);
      }
    }
  } catch (err) {
    console.error(err.message);
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
