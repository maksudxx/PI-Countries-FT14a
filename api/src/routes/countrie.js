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
    const { nameFront } = req.query;

    let countries = await Country.findAll();
    if (countries.length === 0) {
      countries = await axios.get(`https://restcountries.eu/rest/v2/all`);
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

    if (!nameFront) {
      const countrie = await Country.findAll({
      });
      res.json(countrie);
    } else {
      const matchCountrie = await Country.findAll({
        where: { name: { [Op.iLike]: `%${nameFront}%` } },
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
  const { name, difficulty, duration, season, countries } = req.body;

  let newActivity = await TouristActivity.create({
    name,
    difficulty,
    duration,
    season,
  });

  await newActivity.addTouristActivity(countries.id);
  res.json(newActivity);
  //     let tourist = req.body
  //     console.log("soy Actividad turistica", tourist)
  //          try {
  //            let[turista, created] = await TouristActivity.findOrCreate({
  //              where: {
  //                name : tourist.name,
  //                difficulty: tourist.difficulty,
  //                duration: tourist.duration,
  //                season: tourist.season,
  //              }
  //            })
  //            //console.log(created)
  //            await turista.setCountries(tourist.id)
  //            res.send(turista)
  //           }catch(err){

  //            res.send("no se pudo cargar la BD")
  //           }
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

module.exports = router;
