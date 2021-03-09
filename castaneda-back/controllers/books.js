import express from 'express';
import Book from '../models/book.js';

const books = express.Router();

export const books_get = books.get('/books', async (req, res, next) => {
    try {
        const books = await Book.find()
        res.json(books);
    } catch (error) {
        next(error);
    }
})

export const populate_get = books.get('/populate', async (req, res, next) => {
    const newDueBack = () => {
        let today = new Date();
        today.setDate(today.getDate() + Math.floor(Math.random() * 3));
        return today
    };

    await (await Book.find({})).forEach(book => {
            book.due_back = newDueBack();
            book.save()
    })
    return res.json({message: 'Books was populate by new Date of "due_back"'})
})
