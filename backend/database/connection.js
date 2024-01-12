const mongoose = require('mongoose');
const expressAsyncHandler = require('express-async-handler');

const connectMongoDB = expressAsyncHandler( async () => {
    let DB_URI = `mongodb+srv://mern:mern@cluster0.tfnjtzq.mongodb.net/${process.env.DB_NAME}`;
    await mongoose.connect(DB_URI).then(con => {
        console.log(`Mongodb connect to the PORT:${con.connection.host}`);
    }).catch(error => {
        console.log(error);
    })
});

module.exports = connectMongoDB;