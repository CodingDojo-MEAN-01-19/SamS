const mongoose = require('mongoose');
const { Schema } = mongoose;


var UserSchema = new mongoose.Schema({
  name: String,
  age: Number
 })

 var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'

 //moved from server.js and changes var User to module.exports
 module.exports = mongoose.model('User', UserSchema); // We are retrieving this Schema from our Models, named 'User'