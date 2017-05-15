'use strict';

const Mongoose = require('mongoose');

Mongoose.connect('mongodb://127.0.0.1/conekta');  

var database = Mongoose.connection;

database.on('error', console.error.bind(console, 'Error: Connection with database failed'));

database.once('open', function callback() {
  console.log("Connection with database is successful");
});

exports.Mongoose = Mongoose;
exports.database = database;