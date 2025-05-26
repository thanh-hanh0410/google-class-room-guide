const express = require('express');
const app = express();
const connection = require('./db/connection');
require('dotenv').config();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Google Classroom Guide API');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
});
