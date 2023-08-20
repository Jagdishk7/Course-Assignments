const User = require('../model/user');

const checkUserExist = async (req, res, next) => {
  const { email } = req.body;
  console.log(req.body);
  try {
    const userFound = await User.findOne({ email });
    console.log(userFound);
    if (userFound) {
      return res
        .status(409)
        .json({ msg: 'User already exist with this email.' });
    }
    next();
  } catch (error) {}
};

module.exports = { checkUserExist };
