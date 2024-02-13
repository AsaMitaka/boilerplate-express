const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  const dirPath = __dirname + '/views/index.html';
  res.sendFile(dirPath);
});

module.exports = app;
