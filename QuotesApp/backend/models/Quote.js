const mongoose = require("mongoose");


// structuring schema
const QuoteSchema = new mongoose.Schema({
    text:String,
    author:String
})
// creating a model from the schema
module.exports = mongoose.model('Quote',QuoteSchema);

 