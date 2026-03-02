//const express = require('express'); //common js syntax
import express from 'express'; //module js syntax
const app = express();

// app.get('/', (req, res) => {
//     res.send('Server is Ready!');
// })
const jokes = [
        {
            id: 1,
            title: "Why don't scientists trust atoms? Because they make up everything!"
        },
        {
            id: 2,
            title: "Why don't eggs tell jokes? They'd crack each other up."
        },
        {
            id: 3,
            title: "Why did the scarecrow win an award? Because he was outstanding in his field!"
        },
        {
            id: 4,
            title: "Why don't lobsters share? Because they're shellfish."
        }
    ];

//get a list of 5 jokes 
app.get('/api/jokes', (req, res) => {
    res.send(jokes);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,() => {
    console.log(`Server is running at http://localhost:${PORT}`);
});