const bcrypt = require("bcrypt");
const saltRounds = 10;
const Users = require("../models/Users");

const profile = async (req, res) => {
  try {
    const { _id } = req.user;
    const user = await Users.findById(_id).select("-password").exec();

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateProfileAvatar = async (req, res) => {
  try {
    const { _id } = req.user;
    const file = req.file;

    const user = await Users.findByIdAndUpdate(
      _id,
      { $set: { avatar: file } },
      {
        new: true,
        upsert: true,
      }
    )
      .select("-password")
      .exec();

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateProfileBackground = async (req, res) => {
  try {
    const { _id } = req.user;
    const file = req.file;

    const user = await Users.findByIdAndUpdate(
      _id,
      { $set: { backgroundCover: file } },
      {
        new: true,
        upsert: true,
      }
    )
      .select("-password")
      .exec();

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateProfileInfo = async (req, res) => {
  try {
    const { _id } = req.user;

    const user = await Users.findOneAndUpdate(
      { _id },
      { $set: req.body },
      {
        new: true,
        upsert: true, // Make this update into an upsert
      }
    ).exec();

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await Users.find()
      .select("-password")
      .sort("-updatedAt")
      .exec();

    res.status(200).json(users);
  } catch (error) {
    console.log("error: ", error.response);
    res.status(400).json(error.response);
  }
};

const createUser = async (req, res) => {
  try {
    const data = req.body;

    await bcrypt.hash(data.password, saltRounds, async (err, hash) => {
      if (err) {
        console.log("err: ", err);
        res.status(400).json(err);
      }

      try {
        const user = new Users({
          ...data,
          password: hash,
          // role: data.role.value,
          // status: data.status.value,
        });

        await user.save();

        res.status(201).json(user);
      } catch (error) {
        console.log("error: ", error);
        res.status(400).json({ message: "Email already exists" });
      }
    });
  } catch (error) {
    console.log("error: ", error.response);
    res.status(400).json(error.response);
  }
};

const getDetailUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findById(id).select("-password").exec();

    // const data = {
    //   ...user.toObject(),
    //   statusOption: {
    //     value: user.status,
    //     label: user.status.charAt(0).toUpperCase() + user.status.slice(1),
    //   },
    //   roleOption: {
    //     value: user.role,
    //     label: user.role.charAt(0).toUpperCase() + user.role.slice(1),
    //   },
    // };

    res.status(200).json(user);
  } catch (error) {
    console.log("error: ", error.response);
    res.status(400).json(error.response);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    if (data.password && data.password !== "") {
      const salt = await bcrypt.genSaltSync(saltRounds);
      const hash = await bcrypt.hashSync(data.password, salt);

      data.password = hash;
    } else {
      await delete data.password;
    }

    const user = await Users.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true, upsert: true }
    )
      .select("-password")
      .exec();

    res.status(200).json(user);
  } catch (error) {
    console.log("error: ", error.response);
    res.status(400).json(error.response);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await Users.findByIdAndUpdate(
      id,
      {
        $set: { status: "deleted" },
      },
      { new: true, upsert: true }
    ).exec();

    res.status(201).json({ message: "Deleted" });
  } catch (error) {
    console.log("error: ", error.response);
    res.status(400).json(error.response);
  }
};

const getAllUsersInvestor = async (req, res) => {
  try {
    const users = await Users.find({ role: "investor" }).exec();

    res.status(200).json(users);
  } catch (error) {
    console.log("error: ", error.response);
    res.status(400).json(error.response);
  }
};

module.exports = {
  profile,
  updateProfileAvatar,
  updateProfileBackground,
  updateProfileInfo,
  getAllUsers,
  createUser,
  getDetailUser,
  updateUser,
  deleteUser,
  getAllUsersInvestor,
};
