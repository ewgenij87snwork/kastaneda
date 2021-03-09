import express from 'express';
import {books_get, populate_get} from '../controllers/books.js'
import {
  user_delete,
  user_create,
  users_get, 
  users_post, 
  user_login,
  user_detail
} from "../controllers/users.js";
const index = express.Router();

/* GET home page. */
index.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

index.get('/users', users_get);
index.post('/users', users_post);
index.delete('/users/:id', user_delete);
index.get('/users/:id', user_detail);
index.post('/user/create', user_create);
index.post('/login', user_login);

index.get('/books', books_get);
index.get('/populate', populate_get)

export default index;
