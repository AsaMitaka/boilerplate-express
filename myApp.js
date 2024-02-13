const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path));

app.get('/', function (req, res) {
  const dirPath = __dirname + '/views/index.html';
  res.sendFile(dirPath);
});

module.exports = app;
