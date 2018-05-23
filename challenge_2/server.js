var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongo = require('./mongo.js');

var app = express();
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'client')));

app.post('/dataIncoming', function (req, res) {
  let body = req.body;
  let keys = Object.keys(body);
  let csv = "";
  let id = 1;

  function makeFirstString() {
    let holder = [];
    holder.push('id');
    holder.push('parent ID')
    for (let i = 0; i < keys.length-1; i++) {
      holder.push(keys[i]);
    };
    holder.join(',');
    holder += '<br>';
    csv += holder;
  };

  function recurse(body, child) {
    let holder = [];
    holder.push(id);
    id++;

    if (child === 0) {
      holder.push('null');
    } else {
      holder.push(child);
    }
    child++;

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
      recurse(body.children[i], child);
    }
  };

  makeFirstString();
  recurse(body, 0);
  
  let newcsv = new mongo({file: csv});
  newcsv.save().then(item => console.log(item));
  mongo.find({file: csv}, (arr) => {
    console.log(arr);
  })
  res.send(csv);
})

app.listen(3000, () => console.log('Listening on port 3000'));