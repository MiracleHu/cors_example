const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
/* app.use(cors()) 相当于加上了以下 header
app.options('/api/data', (req, res) => {
  res.header('Access-Controll-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'test-cors, content-type');
  res.end;
});
*/


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