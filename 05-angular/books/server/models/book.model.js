const mongoose = require('mongoose');

const { Schema } = mongoose;
const BookSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Book title is required'],
      minlength: [2, 'Must be greater than 2 char for title'],
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    pages: {
      type: Number,
      required: true,
      min: [1, 'At least one page is needed'],
    },
    year: Number,
    publisher: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Book', BookSchema); //register
