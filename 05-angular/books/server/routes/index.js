const router = require('express').Router();

const bookRoutes = require('./book.routes');

module.exports = router.use('/books', bookRoutes); //takes everything from the book router, and prepends /book to it
