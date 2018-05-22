// You may assume the JSON data has a regular structure and hierarchy (see included sample file). The server must flatten the JSON hierarchy, mapping each item in the JSON to a single line of CSV report (see included sample output). You may assume child records in the JSON will always be in a property called children but you may not assume a JSON record has any other specific properties; i.e. any properties that exist besides children must be mapped to a column in your CSV report.

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'client')));

app.post('/dataIncoming', function (req, res) {
  let body = req.body;
  let keys = Object.keys(body);
  let csv = "";

  function makeFirstString() {
    let holder = [];
    for (let i = 0; i < keys.length-1; i++) {
      holder.push(keys[i]);
    };
    holder.join(',');
    holder += '<br>';
    csv += holder;
  }

  function recurse(body) {
    let holder = [];
    for (let i = 0; i < keys.length - 1; i++) {
      holder.push(body[keys[i]]);
    }
    holder.join(',');
    holder += '<br>';
    csv += holder;

    if (body.children.length === 0){
      return;
    }
    for (let i = 0; i < body.children.length; i++) {
      recurse(body.children[i]);
    }
  }
  makeFirstString();
  recurse(body);
  res.send(csv);
})

app.listen(3000, () => console.log('Listening on port 3000'));