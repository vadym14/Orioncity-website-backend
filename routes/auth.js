const router = require("express").Router();

const authCtl = require("../controllers/auth");

router.post("/register", authCtl.register);
router.post("/login", authCtl.login);

module.exports = router;
