require('dotenv').config();
const bcrypt = require('bcrypt');

const User = require('../model/user');

const registerUser = async (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then(() =>
      res
        .status(201)
        .json({ success: true, msg: 'User registered successfully' })
    )
    .catch((err) => res.status(500).json({ success: false, msg: err.message }));
  try {
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      return res
        .status(400)
        .json({ success: false, msg: 'Proper credentias are required.' });
    }

    const user = await User.findOne({ username }).select('+password');

    if (!user) {
      return res.status(404).json({ success: false, msg: 'User not found.' });
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return res
        .status(400)
        .json({ success: false, msg: "Password didn't match" });
    }

    const token = user.signToken();
    const cookiesData = {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
    };
    res.cookie('token', token, cookiesData);
    return res.status(200).json({ success: true, token });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const profile = async (req, res) => {
  const { username } = req.user;

  try {
    const userData = await User.findOne({ username });
    return res.status(200).json({
      success: true,
      data: userData,
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const logout = (req, res) => {
  return res
    .status(202)
    .clearCookie('token')
    .json({ success: true, msg: "You've been logged out." });
};

module.exports = { registerUser, loginUser, profile, logout };
