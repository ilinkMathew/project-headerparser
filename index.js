// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/whoami', function (req, res) {
const ipaddress = req.ip;
const software = req.headers['user-agent']
const language = req.headers['accept-language']
 const headers =  {
  "ipaddress":ipaddress || '',
  "software":software || '' ,
  "language":language || ''
}
  res.send(headers)
});

 module.exports = app;
