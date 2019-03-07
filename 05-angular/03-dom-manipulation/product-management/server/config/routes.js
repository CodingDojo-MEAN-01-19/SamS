var mongoose = require('mongoose');
var Cake = mongoose.model('Cake');
var cakes = require('../controllers/cakes');

module.exports = function(app) {
  // Get to retrieve all cakes
  app.get('/cakes', function(req, res) {
    cakes.showAll(req, res);
  });

  // Post to create a task
  app.post('/cakes', function(req, res) {
    cakes.createOne(req, res);
  });

  // Put to update a task
  app.put('/cakes/:id', function(req, res) {
    cakes.updateOne(req, res);
  });

  // Delete to delete a task
  app.delete('/cakes/:id', function(req, res) {
    console.log('this is from routes.js', req.params.id);
    cakes.deleteOne(req, res);
  });

  // Get to retrieve task by ID
  app.get('/cakes/:id', function(req, res) {
    cakes.findOne(req, res);
  });
};
