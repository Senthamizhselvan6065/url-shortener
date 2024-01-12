const express = require('express');
const server = express();

const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
server.use(cors());

const app = require('./app');
server.use('/', app);

const connectMongoDB = require('./database/connection');
connectMongoDB();

/* server listening localhost:8000/api/v1 */
server.listen(process.env.PORT, () => {
    console.log(`server start with localhost:${process.env.PORT} and ${process.env.NODE_ENV}`);
});