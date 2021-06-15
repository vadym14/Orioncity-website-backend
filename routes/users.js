const express = require("express");
const router = express.Router();
const uploadMulterS3 = require("../middleware/uploadMulterS3");

const usersCtl = require("../controllers/users");

/* GET users listing. */
router.post(
  "/profile/avatar",
  uploadMulterS3.single("avatar"),
  usersCtl.updateProfileAvatar
);
router.post(
  "/profile/background",
  uploadMulterS3.single("background"),
  usersCtl.updateProfileBackground
);
router.put("/profile/info", usersCtl.updateProfileInfo);
router.get("/profile", usersCtl.profile);

router.post("/create", usersCtl.createUser);
router.put("/detail/:id", usersCtl.updateUser);
router.delete("/detail/:id", usersCtl.deleteUser);
router.get("/detail/:id", usersCtl.getDetailUser);
router.get("/investor", usersCtl.getAllUsersInvestor);
router.get("/", usersCtl.getAllUsers);

module.exports = router;
