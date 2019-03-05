const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs'); //for working with file system

const modelsPath = path.join(__dirname, '../models'); //this is pulling in models
// const modelsPath = path.resolve('server/models');

mongoose.connect('mongodb://localhost/books', {
  useNewUrlParser: true,
  useCreateIndex: true,
});
mongoose.connection.on('connected', () => console.log('Connected to Mongodb'));

fs.readdirSync(modelsPath) //read modelsPath directory
  .filter(file => file.endsWith('.js'))
  .forEach(file => require(path.join(modelsPath, file)));
