// packages
require('dotenv').config();
const express = require('express');

// modules
const connectToDB = require('./db/connect');
const router = require('./routes/route');

// variables
const app = express();
const port = process.env.PORT || 5000;
const mongoURI = process.env.MONGO_URI;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', router);

// routes
app.get('/', (req, res) => {
  res.send('Home route');
});

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
