const express = require('express');

const BookController = require('./controllers/BookController');

const routes = express.Router();

routes.get('/', async (req, res) => {
    const books = await BookController.index();
    res.json({ books });
});

routes.get('/:id', (req, res) => {
    let { id } = req.params;
    id = parseInt(id, 10);
    const book = BookController.show(id);
    res.json({ book });
});

routes.post('/', (req, res) => {
    res.json({ message: 'Create new book' });
})

module.exports = routes;
