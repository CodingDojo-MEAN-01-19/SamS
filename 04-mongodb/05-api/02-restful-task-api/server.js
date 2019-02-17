var express = require('express');
var path = require('path');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/RestfulTaskAPI');
var TaskSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'title is required'] },
  description: { type: String, default: '' },
  completed: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});
mongoose.model('Task', TaskSchema);
var Task = mongoose.model('Task');

mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Get to retrieve all tasks
app.get('/tasks', function(req, res) {
  Task.find({}, function(err, task) {
    if (err) {
      console.log('There is an error', err);
      // respond with JSON
      res.json({ message: 'There is an error', error: err });
    } else {
      // respond with JSON
      res.json({ task });
    }
  });
});

// Post to create a task
app.post('/tasks', function(req, res) {
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
});

// Put to update a task
app.put('/tasks/:id', function(req, response) {
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
});

// Delete to delete a task
app.delete('/tasks/:id', function(req, res) {
  Task.remove({ _id: req.params.id }, function(err) {
    if (err) {
      console.log('There is an error', err);
    } else {
      console.log('Task deleted');
      res.redirect('/tasks');
    }
  });
});

// Get to retrieve task by ID
app.get('/tasks/:id', function(req, res) {
  Task.findOne({ _id: req.params.id }, function(err, task) {
    if (err) {
      console.log('There is an error', err);
    } else {
      console.log('Task found');
      // respond with JSON
      res.json({ data: task });
    }
  });
});

//App listening
app.listen(8000, function() {
  console.log('listening on port 8000');
});
