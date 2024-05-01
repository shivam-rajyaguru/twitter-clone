const jwt = require("jsonwebtoken");

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    console.log(req.cookies);
    if (!token) {
      return res.status(401).json({
        message: "User not authenticated",
        success: false,
      });
    }

    const decode = await jwt.verify(token, process.env.TOKEN_STRING);
    console.log(decode);
    req.user = decode.userId;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { isAuthenticated };
