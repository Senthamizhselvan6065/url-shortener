const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/* user router */
const userRouter = require('./controllers/user.controller');
app.use('/api/v1/user', userRouter);

/* url router */
const urlRouter = require('./controllers/url.controller');
app.use('/api/v1/url', urlRouter);

/* error middleware */
const ErrorMiddleware = require('./middlewares/ErrorMiddleware');
app.use(ErrorMiddleware);

module.exports = app;