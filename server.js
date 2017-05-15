'use strict';

const Hapi = require('hapi');
const Books = require('./model/books').Books;
const Database = require('./database/database');

const server = new Hapi.Server();
server.connection({ port: 9000, host: 'localhost' });

server.route({
    method: 'POST',
    path: '/books',
    handler: function (request, reply) {
        Books.createBook(request.payload, function(err, book) {
            if (!err) 
                return reply({ok:true, id: book.id});
            else 
                return reply({error: '', ok: false});
        });
    }
});

server.route({
    method: 'GET',
    path: '/books/{id}',
    handler: function (request, reply) {
        Books.getBook(request.params.id , function(err, book) {
            if (!err) {
                if(book)
                    return reply({item:{book},ok: true});
                else
                    return reply({ok: false, error: ''});
            } 
        });
    }
});

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});