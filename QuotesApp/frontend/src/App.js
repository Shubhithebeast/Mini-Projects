// client/src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Import the CSS file

const  App=() =>{
    const [quote, setQuote] = useState({ text: '', author: '' });
    const [searchAuthor, setSearchAuthor] = useState('');

    const getRandomQuote = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/random');
            // console.log(response.data);
            const {a:author, q:text} = response.data[0];

            await axios.post('http://localhost:5000/api/addQuote',{author,text});
            setQuote({author,text});
        } catch (error) {  
            console.error(error);
        }
    };

    const searchByAuthor = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/search/${searchAuthor}`);
            if (response.data.length > 0) { 
                setQuote(response.data[0]);
            } else {
                setQuote({ text: 'No quotes found.', author: '' });
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getRandomQuote();
    }, []);

    return (
        <div className="app-container">
            <div className="quote-container">
                <h1>Quote of the Day</h1>
                <p className="quote-text">{quote.text}</p>
                <p className="quote-author">- {quote.author}</p>
            </div>

            <div className="buttons-container">
                <button className="button" onClick={getRandomQuote}>
                    Next Quote
                </button>

                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Enter author name"
                        value={searchAuthor}
                        onChange={(e) => setSearchAuthor(e.target.value)}
                    />
                    <button className="button" onClick={searchByAuthor}>
                        Search by Author
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
