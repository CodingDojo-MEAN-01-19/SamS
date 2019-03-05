const Book = require('mongoose').model('Book'); //get mongoose model

const { Http } = require('@status/codes'); //to install, npm i @status/codes

module.exports = {
  // get all of resource (book)
  index(request, response) {
    Book.find({})
      .then(books => response.json(books))
      .catch(error => response.status(Http.BadRequest).json(error));
  },
  // create resource
  create(request, response) {
    Book.create(request.body)
      .then(book => response.json(book))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );

        response.status(Http.UnprocessableEntity).json(errors);
      });
  },
  // get one resource (book)
  show(request, response) {
    const { book_id: bookId } = request.params;

    Book.findById(bookId)
      .then(book => response.json(book))
      .catch(error => response.status(Http.BadRequest).json(error));
  },
  // update resource
  update(request, response) {
    const { book_id: bookId } = request.params;

    Book.findByIdAndUpdate(bookId, request.body, { new: true }) //{ new: true } this guarentees that modifed doc is returned, and not original document
      .then(book => response.json(book))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );

        response.status(Http.UnprocessableEntity).json(errors);
      });
  },
  // delete resource
  destroy(request, response) {
    const { book_id: bookId } = request.params;

    Book.findByIdAndRemove(bookId)
      .then(book => response.json(book))
      .catch(error => response.status(Http.BadRequest).json(error));
  },
};
