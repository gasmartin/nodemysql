class Book {
    static index (connection) {
        const query = 'SELECT * FROM books;';
        return new Promise((resolve, reject) => {
            connection.query(query, (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        });
    }

    static show (connection, id) {
        const query = `SELECT * FROM books WHERE book.id = ${id};`;
        connection.query(query, (err, results, fields) => {
            if (err) {
                console.log(err);
                return;
            }
            return results;
        });
    }

    static create (connection, book) {

    }
}

module.exports = Book;
