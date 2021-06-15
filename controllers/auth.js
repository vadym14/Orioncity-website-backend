const bcrypt = require("bcrypt");
const saltRounds = 10;
const JWT = require("jsonwebtoken");

const Users = require("../models/Users");

const register = async (request, response) => {
  try {
    const { email, password } = request.body;

    await bcrypt.hash(password, saltRounds, async (err, hash) => {
      if (err) {
        console.log("err: ", err);
        response.status(400).json(err);
      }

      try {
        const user = new Users({
          email,
          password: hash,
        });

        await user.save();

        response.status(201).json(user);
      } catch (error) {
        console.log("error: ", error);
        response.status(400).json({ message: "Email already exists" });
      }
    });
  } catch (error) {
    console.log("err: ", error);
    response.status(400).json(error.response);
  }
};

const login = async (request, response) => {
  try {
    const { email, password } = request.body;
    const user = await Users.findOne({ email }).exec();

    // if (user.role === "admin") {
    //   response
    //     .status(401)
    //     .json({ status: "error", message: "Account incorrect." });
    // }

    // check password
    await bcrypt.compare(password, user.password, async (err, result) => {
      if (err) {
        console.log("err: ", err);
        response.status(400).json(err);
      }
      // result == true
      if (result === true) {
        // create token and login
        const token = await JWT.sign(
          {
            _id: user._id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
          },
          "secret",
          { expiresIn: "30 days" }
        );

        user._token = token;
        await user.save();

        request.headers.authorization = `Bearer ${token}`;

        response.status(200).json(user);
      } else {
        response
          .status(401)
          .json({ status: "error", message: "Password incorrect." });
      }
    });
    // });
  } catch (error) {
    console.log("err: ", error);
    response.status(400).json(error.response);
  }
};

module.exports = {
  register,
  login,
};
