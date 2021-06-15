const express = require("express");
const router = express.Router();
const uploadMulterS3 = require("../middleware/uploadMulterS3");
const authMiddleware = require("../middleware/authentication");

const projectsCtl = require("../controllers/projects");

router.get("/home", projectsCtl.getHomeProjects);
router.get("/silver-lake", projectsCtl.getProductsSilverLake);
router.get("/west-hollywood", projectsCtl.getProductsHollywood);
router.get("/cities/:id", projectsCtl.getProjectsOfCity);
router.get("/home/:id", projectsCtl.getDetailProjectHome);
router.get("/filter", projectsCtl.getProjectsWithFilter);
router.get("/", projectsCtl.getAllProjects);

router.use(authMiddleware);
router.get("/my-projects", projectsCtl.getMyProjectsDashboard);
router.get("/my-projects/:id", projectsCtl.getDetailMyProject);
router.post(
  "/add",
  uploadMulterS3.fields([
    { name: "picture", maxCount: 1 },
    { name: "gallery" },
  ]),
  projectsCtl.createProject
);
router.post(
  "/detail/:id",
  uploadMulterS3.fields([
    { name: "picture", maxCount: 1 },
    { name: "gallery" },
  ]),
  projectsCtl.updateProject
);
router.delete("/:id", projectsCtl.deleteProject);
router.get("/:id", projectsCtl.getDetailProject);

module.exports = router;
