const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const reg = new RegExp('\\.js$', 'i');

const modelsPath = path.resolve('server', 'models');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/basic_mongoose');

fs.readdirSync(modelsPath).forEach(file => {
  if (reg.test(file)) {
    require(path.join(modelsPath, file));
  }
});