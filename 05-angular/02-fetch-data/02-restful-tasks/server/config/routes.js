var mongoose = require('mongoose');
var Task = mongoose.model('Task');
var tasks = require('../controllers/tasks');

module.exports = function(app) {
  // Get to retrieve all tasks
  app.get('/tasks', function(req, res) {
    tasks.showAll(req, res);
  });

  // Post to create a task
  app.post('/tasks', function(req, res) {
    tasks.createOne(req, res);
  });

  // Put to update a task
  app.put('/tasks/:id', function(req, response) {
    tasks.updateOne(req, res);
  });

  // Delete to delete a task
  app.delete('/tasks/:id', function(req, res) {
    tasks.deleteOne(req, res);
  });

  // Get to retrieve task by ID
  app.get('/tasks/:id', function(req, res) {
    tasks.findOne(req, res);
  });
};
