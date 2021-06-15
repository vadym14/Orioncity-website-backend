const jwt = require('jsonwebtoken');

const authentication = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;
    let token;

    if (authorizationHeader) {
      token = authorizationHeader.split(" ")[1];
    }
    if (token) {
      try {
        decodedToken = await jwt.verify(token, 'secret', { expiresIn: '30 days' });
      } catch (err) {
        return res.status(401).json({ msg: "Error Token!" });
      }

      req.user = decodedToken;
      next();
    } else {
      res.status(401).json({ msg: "Not found JWT" });
    }
  } catch (err) {
    res.status(401).json({ msg: "Account is not validate JWT" });
  }
}

module.exports = authentication;