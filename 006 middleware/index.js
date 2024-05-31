const express = require('express');

const app = express();

const checkToken = (req, res, next) => {

    console.log('Object');

    next();
};

app.get('/user', checkToken, (req, res) => {

    res.send('data fetched successfully');
})

app.listen(5700, () => {

    console.log('server is running on port 5700');
})