require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const apiMetrics = require('prometheus-api-metrics');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(apiMetrics())

app.post('/login', function (req, res) {
  res.send('welcome, ' + req.body.username);
});

app.post('/api/users', function (req, res) {
  res.send('User created');
});

app.get('/api/users', function (req, res) {
  res.send(`The users are, 3`);
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});