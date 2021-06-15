const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authentication");

const city = require("../controllers/projectCities");

router.get("/", city.getListCities);
router.get("/detail/:id", city.getDetailCity);

router.use(authMiddleware)
router.put("/detail/:id", city.updateCity);
router.delete("/detail/:id", city.deleteCity);
router.post("/add", city.createCity);

module.exports = router;
