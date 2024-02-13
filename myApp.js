const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;
require('dotenv').config();

const logger = (req, res, next) => {
  const { method, path, ip } = req;
  console.log(`${method} ${path} - ${ip}`);

  next();
};

const time = (req, res, next) => {
  req.time = new Date().toString();

  next();
};

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/now', time, function (req, res) {
  res.json({
    time: req.time,
  });
});

app.get('/json', function (req, res) {
  let textMessage = 'Hello json';

  if (process.env.MESSAGE_STYLE === 'uppercase') {
    textMessage = textMessage.toUpperCase();
  }

  res.json({ message: textMessage });
});

app.get('/:word/echo', function (req, res) {
  const { word } = req.params;

  res.send({ echo: word });
});

app
  .route('/name')
  .get(function (req, res) {
    const { first, last } = req.query;
    const fullName = first + ' ' + last;

    res.json({ name: fullName });
  })
  .post(function (req, res) {
    const { first, last } = req.body;
    const fullName = `${first} ${last}`;

    res.json({ name: fullName });
  });

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app;
