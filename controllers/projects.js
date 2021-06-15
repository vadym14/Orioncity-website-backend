const Projects = require("../models/Projects");
const ProjectUnit = require("../models/ProjectUnits");
const Users = require("../models/Users");
const Cities = require("../models/ProjectCities");

const getAllProjects = async (req, res) => {
  const projects = await Projects.find()
    .populate("createdBy", "_id email firstName lastName role")
    .populate("updatedBy", "_id email firstName lastName role")
    .populate("userAssigned", "_id email firstName lastName role")
    .populate("cityProject", "_id city state country")
    .populate("units")
    .sort("-updatedAt")
    .exec();

  res.status(200).json(projects);
};

const getHomeProjects = async (req, res) => {
  const offset = Number(req.query.offset || 0);
  const limit = Number(req.query.limit || 0);

  const projects = await Projects.find({
    flagDashboard: true,
    status: {
      $in: ["inactive", "active", "inprogress", "completed", "blocked"],
    },
  })
    .skip(offset * limit)
    .limit(limit)
    .select("name picture flagIndex flagDashboard status")
    .exec();

  res.status(200).json(projects);
};

const getMyProjectsDashboard = async (req, res) => {
  const { _id } = req.user;

  const projects = await Projects.find({
    userAssigned: _id,
    status: {
      $in: ["inactive", "active", "inprogress", "completed", "blocked"],
    },
  })
    .populate("createdBy", "_id email firstName lastName role")
    .populate("updatedBy", "_id email firstName lastName role")
    .populate("cityProject", "_id city state country")
    .populate("units")
    .exec();

  let chartLabels = [];
  let investmentDistribution = [];
  let expectedReturn = [];
  let investmentDistributionTotal = 0;
  let expectedReturnTotal = 0;

  for (let i = 0; i < projects.length; i++) {
    const el = projects[i];
    investmentDistributionTotal += el.investmentAmount;
    expectedReturnTotal += el.estimatedReturn;

    chartLabels.push(el.name);
    investmentDistribution.push(el.investmentAmount);
    expectedReturn.push(el.estimatedReturn);
  }

  res.status(200).json({
    projects,
    chartData: {
      chartLabels,
      investmentDistribution,
      expectedReturn,
      expectedReturnTotal,
      investmentDistributionTotal,
    },
  });
};

const getDetailProjectHome = async (req, res) => {
  const { id } = req.params;

  const project = await Projects.findById(id)
    .select("name picture gallery")
    .exec();

  res.status(200).json(project);
};

const getDetailMyProject = async (req, res) => {
  const { id } = req.params;
  const { _id } = req.user;

  const project = await Projects.findOne({ _id: id, userAssigned: req.user })
    .populate("createdBy", "_id email firstName lastName role")
    .populate("updatedBy", "_id email firstName lastName role")
    .populate("cityProject", "_id city state country")
    .populate("units")
    .exec();

  res.status(200).json(project);
};

const getProductsHollywood = async (req, res) => {
  try {
    const projects = await Projects.find({ isShowHollywood: true })
      .select("name picture gallery")
      .exec();

    res.status(200).json(projects);
  } catch (error) {
    console.log("error: ", error);
    res.status(400).json(error.response);
  }
};

const getProductsSilverLake = async (req, res) => {
  try {
    const projects = await Projects.find({ isSilverLake: true })
      .select("name picture gallery")
      .exec();

    res.status(200).json(projects);
  } catch (error) {
    console.log("error: ", error);
    res.status(400).json(error.response);
  }
};

const createProject = async (req, res) => {
  try {
    const { units, investmentDate } = req.body;
    const { _id } = req.user;

    const files = req.files;

    const user = await Users.findById(_id).exec();

    let unitsData = [];

    if (units) {
      const unitsObj = JSON.parse(units);
      for (let i = 0; i < unitsObj.length; i++) {
        const item = unitsObj[i];
        const unit = new ProjectUnit(item);
        await unit.save();
        unitsData.push(unit._id);
      }
    }

    const project = new Projects({
      ...req.body,
      picture: files && files.picture && files.picture[0],
      gallery: files.gallery,
      units: unitsData,
      createdBy: user,
      updatedBy: user,
      investmentDate: new Date(investmentDate),
    });

    await project.save();

    res.status(201).json(project);
  } catch (error) {
    console.log("error: ", error);
    res.status(400).json(error.response);
  }
};

const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Projects.findByIdAndUpdate(
      id,
      {
        $set: { status: "deleted" },
      },
      { new: true, upsert: true }
    ).exec();
    res.status(201).json({ message: "Deleted" });
  } catch (error) {
    console.log("error: ", error);
    res.status(400).json(error.response);
  }
};

const getDetailProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Projects.findById(id)
      .populate("createdBy", "_id email firstName lastName role")
      .populate("updatedBy", "_id email firstName lastName role")
      .populate("userAssigned", "_id email firstName lastName role")
      .populate("cityProject")
      .populate("units")
      .exec();
    res.status(200).json(project);
  } catch (error) {
    console.log("error: ", error);
    res.status(400).json(error.response);
  }
};

const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { _id } = req.user;

    const { units, investmentDate } = req.body;

    const files = req.files;

    const user = await Users.findById(_id).exec();

    let unitsData = [];

    if (units) {
      const unitsObj = JSON.parse(units);
      for (let i = 0; i < unitsObj.length; i++) {
        const item = unitsObj[i];

        if (item._id) {
          const dataUpdate = {
            unit: item.unit,
            size: item.size,
            cost: item.cost,
            sale: item.sale,
            salePrice: item.sale,
          };
          const updateUnit = await ProjectUnit.findByIdAndUpdate(
            item._id,
            { $set: dataUpdate },
            { new: true, upsert: true }
          ).exec();
          await unitsData.push(updateUnit);
        } else {
          const unit = new ProjectUnit(item);
          await unit.save();
          unitsData.push(unit._id);
        }
      }
    }

    let dataUpdate = {
      ...req.body,
      gallery: files.gallery,
      createdBy: user,
      updatedBy: user,
      units: unitsData,
      investmentDate: new Date(investmentDate),
    };

    if (files && files.picture) {
      dataUpdate.picture = files.picture[0];
    }

    if (files && files.gallery) {
      dataUpdate.gallery = files.gallery;
    }

    const project = await Projects.findByIdAndUpdate(
      id,
      {
        $set: dataUpdate,
      },
      { new: true, upsert: true }
    ).exec();
    res.status(200).json(project);
  } catch (error) {
    console.log("error: ", error);
    res.status(400).json(error.response);
  }
};

const getProjectsOfCity = async (req, res) => {
  try {
    const { id } = req.params;
    const city = await Cities.findById(id).exec();
    const projects = await Projects.find({ cityProject: id })
      .select("name picture gallery")
      .exec();
    res.status(200).json({ city, projects });
  } catch (error) {
    console.log("error: ", error);
    res.status(400).json(error);
  }
};

const getProjectsWithFilter = async (req, res) => {
  try {
    const { city } = req.query;
    const query = city !== "all" ? { cityProject: city } : {};

    const projects = await Projects.find(query)
      .select("name picture gallery")
      .populate("cityProject")
      .exec();
    res.status(200).json(projects);
  } catch (error) {
    console.log("error: ", error);
    res.status(400).json(error);
  }
};

module.exports = {
  createProject,
  getAllProjects,
  getHomeProjects,
  getMyProjectsDashboard,
  getDetailProjectHome,
  getDetailMyProject,
  getProductsHollywood,
  getProductsSilverLake,
  deleteProject,
  getDetailProject,
  updateProject,
  getProjectsOfCity,
  getProjectsWithFilter,
};
