var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var Mongo = require('./mongo.js')

var app = express();
app.use(bodyParser.json());

app.use(express.static('public'));

app.post('/page1', function(req, res) {
  console.log(req.body);
  res.send('Got it boo')
})

app.listen(3000, () => console.log('Listening on 3000'));



