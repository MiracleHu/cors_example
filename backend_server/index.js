const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/data', (req, res) => {
  res.send('{"data":"get haha"}');
});

app.put('/api/data', (req, res) => {
  res.send('{"data":"put haha"}');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});