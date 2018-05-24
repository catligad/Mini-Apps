var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var models = require('./mongo.js')

var app = express();
app.use(bodyParser.json());

app.use(express.static('public'));

app.post('/page1', function(req, res) {
  var user = new models.User(req.body);
  user.save((err) => {
    if (err) {
      console.log(err);
    }
  });
  res.send('Got it boo')
})

app.post('/page2', function(req, res) {
  var address = new models.Address(req.body);
  address.save((err) => {
    if (err) {
      console.log(err);
    }
  });
  res.send('Got it boo')
})

app.post('/page3', function(req, res) {
  var cc = new models.CC(req.body);
  cc.save((err) => {
    if (err) {
      console.log(err);
    }
  });
  res.send('Got it boo')
})

app.listen(3000, () => console.log('Listening on 3000'));