require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../model/user');

const jwtSecret = process.env.JWT_SECRET;

const registerUser = async (req, res) => {
  const creds = req.body;
  const { password } = creds;
  if (password) {
    bcrypt
      .hash(password, 10)
      .then((hashedPassword) => {
        const user = new User({
          ...creds,
          password: hashedPassword,
        });

        user
          .save()
          .then(() =>
            res.status(201).json({ msg: 'User registered successfully' })
          )
          .catch((err) => res.status(500).json({ err }));
      })
      .catch((err) => res.status(500).json({ err }));
  }
  try {
  } catch (error) {
    res.status(500).json({ error });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    User.findOne({ email })
      .then((user) => {
        bcrypt
          .compare(password, user.password)
          .then((passwordMathed) => {
            if (!passwordMathed)
              return res.status(400).json({ err: "Password didn't match" });

            const token = jwt.sign(
              {
                userID: user._id,
                userEmail: user.email,
              },
              jwtSecret,
              { expiresIn: '30d' }
            );
            return res.status(200).json({
              msg: 'User logged in successfully',
              email: user.email,
              token,
            });
          })
          .catch(() =>
            res.status(400).json({ err: "Didn't get the password" })
          );
      })
      .catch((err) =>
        res.status(404).json({ err: `No user found with the email - ${email}` })
      );
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = { registerUser, loginUser };
