const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/userData');

var db = mongoose.connection;

db.on('error', console.log.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('Im here!');
});

var Schema = mongoose.Schema;

var userInfo = new Schema ({
  name: String,
  email: String,
  password: String
});

var addressInfo = new Schema({
  address: String,
  city: String,
  state: String,
  zipCode: String,
  phoneNumber: String
});

var ccInfo = new Schema({
  creditCard: String,
  expiryDate: String,
  cvv: String,
  billingZC: String
})

var User = mongoose.model('User', userInfo);
var Address = mongoose.model('Address', addressInfo);
var CC = mongoose.model('CC', ccInfo);

module.exports = db;