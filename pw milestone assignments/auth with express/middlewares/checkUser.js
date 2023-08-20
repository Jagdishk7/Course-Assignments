const jwt = require('jsonwebtoken');

const User = require('../model/user');

const jwtSecret = process.env.JWT_SECRET;

const checkUserExist = async (req, res, next) => {
  const { email } = req.body;
  try {
    const userFound = await User.findOne({ email });
    if (userFound) {
      return res
        .status(409)
        .json({ msg: 'User already exist with this email.' });
    }
    next();
  } catch (error) {}
};

const auth = async (req, res, next) => {
  const token = req.cookies?.token;
  if (!token)
    return res.status(404).json({
      success: false,
      msg: 'Authentication failed',
      token: req.cookies,
    });
  try {
    const creds = jwt.verify(token, jwtSecret);
    req.user = { id: creds.id, username: creds.username };
    next();
  } catch (error) {
    return res.status(400).json({ success: false, msg: error.message });
  }
};

module.exports = { checkUserExist, auth };
