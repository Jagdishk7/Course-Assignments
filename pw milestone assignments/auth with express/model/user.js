const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;

const user = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required.'],
    },
    username: {
      type: String,
      unique: true,
      required: [true, 'Username is required.'],
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Email is required.'],
    },
    password: {
      type: String,
      required: [true, 'Password is required.'],
      select: false,
    },

    bio: {
      type: String,
      maxLength: 200,
    },
  },
  {
    timestamps: true,
  }
);

user.methods = {
  signToken() {
    const token = jwt.sign(
      { id: this._id, username: this.username },
      jwtSecret,
      { expiresIn: '24h' }
    );
    return token;
  },
};

user.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  try {
    this.password = await bcrypt.hash(this.password, 10);
    return next();
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, msg: 'Could not hash password' });
  }
});

module.exports = mongoose.model('user', user);
