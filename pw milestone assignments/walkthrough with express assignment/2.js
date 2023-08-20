const express = require('express');
const app = express();

var counter = 0;

app.get('/', (req, res) => {
  res.json({ counter });
});
app.get('/increament', (req, res) => {
  counter++;
  res.send({ counter });
});
app.get('/decreament', (req, res) => {
  counter--;
  res.send({ counter });
});

app.listen(3000, () => console.log('Server started listening to port 3000'));
