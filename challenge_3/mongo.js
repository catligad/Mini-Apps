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
  name: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  // addressInfo: {type: Schema.Types.ObjectId, ref: 'Address'},
  // ccInfo: {type: Schema.Types.ObjectId, ref: 'CC'}
});

var addressInfo = new Schema({
  addressLine1: {type: String, required: true},
  addressLine2: {type: String, required: false},
  city: {type: String, required: true},
  state: {type: String, required: true},
  zipCode: {type: String, required: true},
  phoneNumber: {type: String, required: true}
});

var ccInfo = new Schema({
  creditCard: {type: String, required: true},
  expiryDate: {type: String, required: true},
  cvv: {type: String, required: true},
  billingZC: {type: String, required: true}
})


var models = {
  User : mongoose.model('User', userInfo),
  Address : mongoose.model('Address', addressInfo),
  CC : mongoose.model('CC', ccInfo)
}

module.exports = models;