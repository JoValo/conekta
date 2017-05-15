'use strict';

const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const BookSchema = new Schema({
  title : { type: String, required: true },
  author : { type: String, required: true }  
},
{
    toObject: { virtuals: true },
    toJSON: { virtuals: true }   

});

BookSchema.statics.getBook= function(id, callback) {
    this.findOne({'_id': id}, callback);
};

BookSchema.statics.createBook = function(requestData, callback) {
    this.create(requestData, callback);
};

const books = mongoose.model('book', BookSchema);

module.exports = {
    Books : books
};