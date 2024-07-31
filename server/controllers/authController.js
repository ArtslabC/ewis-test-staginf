const User = require("../models/User");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

const registerUser = async (req, res) => {
  const { username, password, fullname, email } = req.body;

  const userExists = await User.findOne({ username });
  if (userExists) {
    return res.status(400).json({ message: "Username already exists" });
  }

  const emailExists = await User.findOne({ email });
  if (emailExists) {
    return res.status(400).json({ message: "Email already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    password: hashedPassword,
    fullname,
    email,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      username: user.username,
      fullname: user.fullname,
      email: user.email,
      token: generateToken(user._id),
      role: user.role,
    });
  } else {
    res.status(400).json({ message: "Invalid user data" });
  }
};

const loginUser = async (req, res) => {
  const { usernameOrEmail, password } = req.body;
  console.log(usernameOrEmail);
  try {
    const user = await User.findOne({
      $or: [
        { username: usernameOrEmail, status: "active" },
        { email: usernameOrEmail, status: "active" },
      ],
    });
    console.log("reached 1", user);
    if (user && (await bcrypt.compare(password, user.password))) {
      console.log("reached 2");
      res.json({
        _id: user._id,
        username: user.username,
        fullname: user.fullname,
        email: user.email,
        token: generateToken(user._id),
        role: user.role,
      });
    } else {
      res.status(401).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error please try again later" });
  }
};

const logoutUser = (req, res) => {
  // res.clearCookie("token"); // This clears the authentication cookie if you're using cookies
  res.status(200).json({ message: "Logged out successfully" });
};

module.exports = { registerUser, loginUser, logoutUser };
