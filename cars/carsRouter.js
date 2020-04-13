const express = require("express");
const db = require("../data-connection/connect");
const router = express.Router();

router.get("/", async (req, res) => {
  const allCars = await db("cars");
  try {
    res.status(200).json(allCars);
  } catch (err) {
    res.status(500).json("error");
  }
});

router.get("/:id", async (req, res) => {
  const allCarsById = await db("cars").where({ id: req.params.id }).first();
  try {
    if (allCarsById) {
      res.status(200).json(allCarsById);
    } else {
      res.status(404).json("not a valid id");
    }
  } catch (err) {
    res.status(500).json("error");
  }
});

router.post("/", async (req, res) => {
  //WIP: looking to add if certain parts of body are not found produce an error.
  const requiredFields =
    req.body.VIN && req.body.make && req.body.model && req.body.mileage;
  const allCarsById = await db("cars").insert(req.body);
  try {
    if (allCarsById) {
      res.status(201).json(req.body);
    }
  } catch (err) {
    res.status(500).json({ message: error });
  }
});

router.put("/:id", async (req, res) => {
  const updateCars = await db("cars")
    .where({ id: req.params.id })
    .update(req.body);
  try {
    if (updateCars) {
      res.status(200).json(`You have updated ${deleteCars} car from the DB`);
    } else {
      res.status(404).json("not a valid id");
    }
  } catch (err) {
    res.status(500).json("error");
  }
});

router.delete("/:id", async (req, res) => {
  const deleteCars = await db("cars").where({ id: req.params.id }).del();
  try {
    if (deleteCars) {
      res.status(200).json(`You have deleted ${deleteCars} car from the DB`);
    } else {
      res.status(404).json("not a valid id");
    }
  } catch (err) {
    res.status(500).json("error");
  }
});
module.exports = router;
