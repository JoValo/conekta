'use strict';

const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const Book = new Schema({
  title : { type: String, required: true },
  author : { type: String, required: true }  
},
{
    toObject: { virtuals: true },
    toJSON: { virtuals: true }   
});

Book.statics.getBook= function(id, callback) {
    this.findOne({'_id': id}, callback);
};

Book.statics.createBook = function(requestData, callback) {
    this.create(requestData, callback);
};

const books = mongoose.model('book', Book);

module.exports = {
    Books : books
};