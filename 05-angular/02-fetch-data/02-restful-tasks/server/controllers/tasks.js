var mongoose = require('mongoose');
var Task = mongoose.model('Task');

module.exports = {
  showAll: function(req, res) {
    Task.find({}, function(err, tasks) {
      if (err) {
        console.log('There is an error', err);
        // respond with JSON
        res.status(500).json({ message: 'There is an error', error: err }); //500 is an error code
      } else {
        // respond with JSON
        console.log('incoming task data');
        res.json(tasks);
      }
    });
  },

  createOne: function(req, res) {
    var task = new Task({
      title: req.body.title,
      description: req.body.description,
      completed: req.body.completed,
    });
    task.save(function(err, results) {
      if (err) {
        console.log('There is an error', err);
      } else {
        console.log('Task Added!', results);
        res.redirect('/tasks');
      }
    });
  },

  updateOne: function(req, res) {
    console.log(req.params.id);
    Task.update(
      {
        _id: req.params.id,
      },
      {
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed,
      },
      function(error, data) {
        if (error) {
          console.log(error);
          response.json({
            message: 'There is an error',
            error: error,
          });
        } else {
          console.log('Data Updated!');
          response.json({
            message: 'Success',
            data: data,
          });
        }
      }
    );
  },
  deleteOne: function(req, res) {
    Task.remove({ _id: req.params.id }, function(err) {
      if (err) {
        console.log('There is an error', err);
      } else {
        console.log('Task deleted');
        res.redirect('/tasks');
      }
    });
  },
  showOne: function(req, res) {
    Task.findOne({ _id: req.params.id }, function(err, task) {
      if (err) {
        console.log('There is an error', err);
      } else {
        console.log('Task found');
        // respond with JSON
        res.json({ data: task });
      }
    });
  },
};
