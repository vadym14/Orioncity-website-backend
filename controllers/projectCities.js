const ProjectCities = require("../models/ProjectCities");

const createCity = async (req, res) => {
  try {
    const data = req.body;
    console.log(req.user);
    const { _id } = req.user;
    const city = new ProjectCities({
      ...data,
      createdBy: _id,
      updatedBy: _id,
    });

    await city.save();

    res.status(201).json(city);
  } catch (error) {
    console.log("error: ", error);
    res.status(400).json(error.response);
  }
};

const getListCities = async (req, res) => {
  try {
    const cities = await ProjectCities.find().sort({ city: 1 }).exec();

    res.status(200).json(cities);
  } catch (error) {
    console.log("error: ", error);
    res.status(400).json(error);
  }
};

const updateCity = async (req, res) => {
  try {
    const { id } = req.params;
    const city = await ProjectCities.findByIdAndUpdate(
      id,
      { $set: req.body },
      {
        new: true,
        upsert: true,
      }
    ).exec();
    res.status(200).json(city);
  } catch (error) {
    console.log("error: ", error);
    res.status(400).json(error);
  }
};

const getDetailCity = async (req, res) => {
  try {
    const { id } = req.params;
    const city = await ProjectCities.findById(id).exec();
    res.status(200).json(city);
  } catch (error) {
    console.log("error: ", error);
    res.status(400).json(error);
  }
};

const deleteCity = async (req, res) => {
  try {
    const { id } = req.params;
    const city = await ProjectCities.findByIdAndDelete(id).exec();
    res.status(201).json({ message: "Deleted" });
  } catch (error) {
    console.log("error: ", error);
    res.status(400).json(error);
  }
};

module.exports = {
  createCity,
  getListCities,
  updateCity,
  getDetailCity,
  deleteCity,
};
