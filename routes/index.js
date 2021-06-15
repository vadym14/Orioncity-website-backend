const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authentication");

const auth = require("./auth");
const user = require("./users");
const project = require("./projects");
const city = require("./projectCities");

router.use("/auth", auth);
router.use("/projects", project);
router.use("/cities", city);

router.use(authMiddleware);
router.use("/users", user);

router.get("/", function (req, res, next) {
  res.send("respond");
});

module.exports = router;
