const express = require('express');
const router = express.Router();
const axios = require('axios');
const Quote = require('../models/Quote');

// search random quote
router.get('/random',async(req,res)=>{
    try{
        const response = await axios.get('https://zenquotes.io/api/random');
        res.json(response.data);
    }catch(error){ 
        console.error(error);
        res.status(400).send('Server Error...');
    }
}) 
 
// search by author name
router.get('/search/:author', async(req,res)=>{
    const author = res.params.author;
    try{
        const response = await axios.get(`https://zenquotes.io/api/quotes/author/${author}`);
        res.json(response.data);
    }catch(error){
        console.error(error);
        res.status(400).send('Server Error...');
    }
})

router.post('/addQuote', async(req,res)=>{
    const {text,author} = req.body;

    try{
        // add quote and author name in database, in collection quote
        const new_quote = new Quote({text,author});
        await new_quote.save();
        // console.log("Quote successfully added...");
        res.json({success:true, message:"Quote successfully added..."});
    }catch(error){
        console.error(error);
        res.status(400).json({success:false, message:"Failed to save quote..."});
    }
})

module.exports=router;