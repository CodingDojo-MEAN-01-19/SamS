var mongoose = require('mongoose');
var Cake = mongoose.model('Cake');

module.exports = {
  showAll: function(req, res) {
    Cake.find({}, function(err, cakes) {
      if (err) {
        console.log('There is an error', err);
        // respond with JSON
        res.status(500).json({ message: 'There is an error', error: err }); //500 is an error code
      } else {
        // respond with JSON
        console.log('incoming cake data');
        res.json(cakes);
      }
    });
  },

  createOne: function(req, res) {
    var cake = new Cake({
      title: req.body.title,
      description: req.body.description,
      completed: req.body.completed,
    });
    cake.save(function(err, results) {
      if (err) {
        console.log('There is an error', err);
      } else {
        console.log('Cake Added!', results);
        res.redirect('/cakes');
      }
    });
  },

  updateOne: function(req, res) {
    console.log(req.params.id);
    Cake.update(
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
          res.json({
            message: 'There is an error',
            error: error,
          });
        } else {
          console.log('Data Updated!');
          res.json({
            message: 'Success',
            data: data,
          });
        }
      }
    );
  },
  deleteOne: function(req, res) {
    Cake.remove({ _id: req.params.id }, function(err) {
      if (err) {
        console.log('There is an error', err);
      } else {
        console.log('Cake deleted');
        res.redirect('/cakes');
      }
    });
  },
  findOne: function(req, res) {
    Cake.findOne({ _id: req.params.id }, function(err, cake) {
      if (err) {
        console.log('There is an error', err);
      } else {
        console.log('Cake found');
        // respond with JSON
        res.json({ data: cake });
      }
    });
  },
};
