const router = require('express').Router();
const { bookController } = require('../controllers');

//without controllers/index.js file, we have to do this
// const bookController = require('../controllers/book.controller');

//     /books/askdjfhaksjdfhaksdjfh

module.exports = router
  .get('/', bookController.index)
  .post('/', bookController.create)
  .get('/:book_id', bookController.show)
  .put('/:book_id', bookController.update)
  .delete('/:book_id', bookController.destroy);
