const express = require('express');
const app = express();

app.get('/', function (req, res) {
  const dirPath = __dirname + './views/index.html';
  res.sendFile(dirPath);
});

module.exports = app;
