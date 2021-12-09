const express = require('express');
const cors = require('cors');
const WebSocket = require('ws');
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

// 一个端口号只能起一种类型的服务， 3000端口作为http服务， 3001作为websocket服务
const wss = new WebSocket.Server({port: 3001});
wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    console.log(data);
    ws.send('I love you');
  });
});