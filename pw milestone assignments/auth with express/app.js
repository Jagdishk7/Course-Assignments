// packages
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// modules
const connectToDB = require('./db/connect');
const router = require('./routes/route');

// variables
const app = express();
const port = process.env.PORT || 5000;
const mongoURI = process.env.MONGO_URI;

// middlewares
app.use(express.static('client'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/', router);

// Starting funciton
const start = async () => {
  try {
    await connectToDB(mongoURI);
    app.listen(port, () =>
      console.log(`App started listening to port - ${port}`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
