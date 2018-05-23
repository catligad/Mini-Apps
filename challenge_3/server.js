var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.use(express.static('public'));

app.listen(3000, () => console.log('Listening on 3000'));

