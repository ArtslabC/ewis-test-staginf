const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      console.log("Token:", token); // Log the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log("Decoded:", decoded); // Log the decoded token
      let user = await User.findById(decoded.id).select("-password");
      if (user) {
        req.user = user;
        next();
      } else {
        res.status(401).json({ message: "Authorization Failed" });
      }
      console.log("User:", req.user); // Log the user
    } catch (error) {
      console.error("Token error:", error); // Log the error
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};

module.exports = protect;
