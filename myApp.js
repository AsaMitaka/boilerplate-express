const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app;
