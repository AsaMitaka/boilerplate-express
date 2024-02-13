const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
require('dotenv').config();

function logger(req, res, next) {
  const { method, path, ip } = req;
  console.log(`${method} ${path} - ${ip}`);

  next();
}

function time(req, res, next) {
  req.time = Date.now().toString();
  next();
}

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(logger);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/now', time, function (req, res) {
  const time = req.time;

  res.send({ time });
});

app.get('/json', function (req, res) {
  let textMessage = 'Hello json';

  if (process.env.MESSAGE_STYLE === 'uppercase') {
    textMessage = textMessage.toUpperCase();
  }

  res.json({ message: textMessage });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app;
