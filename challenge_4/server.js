var express = require('express');
var path = require('path');
var parser = require('body-parser');

var app = express();

app.use(express.static(path.join(__dirname, '/client/dist')));

app.listen(3000, () => console.log("I\'m listening!"));

