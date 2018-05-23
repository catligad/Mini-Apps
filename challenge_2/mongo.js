const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected!')
});

var csvSchema = new Schema({
  'file': String
});

csvSchema.set('autoIndex, true');

var CSV = mongoose.model('csvFile', csvSchema);

module.exports = CSV;
