require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/twitter', (req, res) => {
    res.send('hello.com');
});

app.get('/login', (req, res) => {
    res.send('<h1>Please login at Chai Aur Code</h1>');
});

app.get('/youtube', (req, res) => {
    res.send('<h2>Chair Aur Code</h2>');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
