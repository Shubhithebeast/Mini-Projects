const mongoose = require('mongoose');
const mongo_url = 'mongodb+srv://shubham:cluster123@quotescluster.d4ao3ui.mongodb.net/quotes_db?retryWrites=true&w=majority'; 

const mongodb = async () => {
    try {
        await mongoose.connect(mongo_url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Database Connected Successfully");
    } catch (error) {
        console.error("Error connecting database", error);
    }
}

module.exports = mongodb;
