const Book = require('../models/Book');

const connection = require('../database/connection');

module.exports = {
    index: async function () {
        let books = [];

        await Book.index(connection)
        .then(result => books = result)
        .catch(err => console.log(err));

        return books;
    },
    show: function (id) {
        const connection = require('../database/connection');
        const book = Book.show(connection, id);
        connection.end();
        return book;
    },
    create: function (book) {
        const connection = require('../database/connection');
        const hasCreated = Book.create(connection, book);
        connection.end();
        return { hasCreated, message: hasCreated ? 'Created!' : 'Error!' };
    }
};
