// importing modules
const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");

// creating instance of express
const app = express();
const PORT = 5000;

// middlewares
app.use(cors()) // enabling cors for routes
app.use(express.json()) // parse incoming json data


// mongodb connection
const mongo_url = "mongodb+srv://shubham:cluster@123@quotescluster.d4ao3ui.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongo_url,{useNewUrlParser:true, useUnifiedTopology:true});


// structuring schema
const QuoteSchema = new mongoose.Schema({
    text:String,
    author:String
})