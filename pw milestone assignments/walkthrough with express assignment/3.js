const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ msg: "I'm homepage." });
});
app.get('/about', (req, res) => {
  res.json({ msg: "I'm about page." });
});
app.get('/contact', (req, res) => {
  res.json({ email: 'support@pwskills.com' });
});
app.get('*', (req, res) => {
  res.send('Page not found');
});

app.listen(3000, () => console.log('Server started listening to port 3000'));
