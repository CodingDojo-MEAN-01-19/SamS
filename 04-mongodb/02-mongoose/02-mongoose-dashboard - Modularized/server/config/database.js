const mongoose = require('mongoose');
const path = require('path');
const modelsPath = path.resolve('server', 'models');
const reg = new RegExp('\\.js$', 'i');

mongoose.connect('mongodb://localhost/mongoose_db');
mongoose.Promise = global.Promise;

fs.readdirSync(modelsPath).forEach(file => {
  if (reg.test(file)) {
    require(path.join(modelsPath, file));
  }
});
