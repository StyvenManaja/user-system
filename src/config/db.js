const mongoose = require('mongoose');

const connectToDB = () => {
    try {
        mongoose.connect(process.env.mongoDB_URI);
        console.log('Database connected');
    } catch (error) {
        throw new Error('Error on connecting to the database : ', error);
    }
}

module.exports = connectToDB;