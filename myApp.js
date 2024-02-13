const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

app.get('/', function (req, res) {
  const dirPath = path.join(__dirname, '/views/index.html');
  res.sendFile(dirPath);
});

module.exports = app;
