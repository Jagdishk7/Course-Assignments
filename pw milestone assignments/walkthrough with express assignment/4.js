const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Generate random number at "/random".');
});
app.get('/random', (req, res) => {
  const random = Math.floor(Math.random() * 100);
  res.json({ random });
});
app.get('*', (req, res) => {
  res.send('Page not found');
});

app.listen(3000, () => console.log('Server started listening to port 3000'));
