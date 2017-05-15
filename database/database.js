'use strict';

const Mongoose = require('mongoose');

Mongoose.connect('mongodb://127.0.0.1/conekta');  

var db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));

db.once('open', function callback() {
  console.log("Connection with database succeeded.");
});

exports.Mongoose = Mongoose;
exports.db = db;