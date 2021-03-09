import createError from 'http-errors';
import express from 'express';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from 'express-session';
import index from "./routes/index.js";
import db from './db.config.js';
import bodyPaarser from 'body-parser';
import cors from 'cors';

const app = express();

db;

const corsOptions = {
  origin: "http://localhost:4000"
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors(corsOptions));
app.use(bodyPaarser.json());
app.use(bodyPaarser.urlencoded({extended: true}))

//For all request
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get('/bla', (req, res) => {
  res.redirect('users');
  // res.json({message: 'blasddfafadfadfadf adfklafd;j'})
})


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
