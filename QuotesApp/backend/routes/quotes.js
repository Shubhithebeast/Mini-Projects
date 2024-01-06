const express = require('express');
const router = express.Router();
const axios = require('axios');

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
        const response = await axios.get(`https://zenquotes.io/api/quotes/author/[${author}]`);
        res.json(response.data);
    }catch(error){
        console.error(error);
        res.status(400).send('Server Error...');
    }
})

module.exports=router;