const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/userData');
mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', console.log.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('Im here!');
});

var Schema = mongoose.Schema;

var userInfo = new Schema ({
  name: String,
  email: String,
  password: String,
  addressInfo: {type: Schema.Types.ObjectId, ref: 'Address'},
  ccInfo: {type: Schema.Types.ObjectId, ref: 'CC'}
});

var addressInfo = new Schema({
  addressLine1: String,
  addressLine2: String,
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


var models = {
  User : mongoose.model('User', userInfo),
  Address : mongoose.model('Address', addressInfo),
  CC : mongoose.model('CC', ccInfo)
}

module.exports = models;