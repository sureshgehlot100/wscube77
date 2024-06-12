const express = require('express');
const upload = require('./middlewares/multer');
require('./config');


const app = express();

app.listen(4400, () => {
    console.log('server is running on port 4400');
});

app.post('/insert_product', upload, (req, res) => {

    res.status(200).json({ message: 'file uploaded successfully' });
});
app.get('/read_product', upload, (req, res) => {

    res.status(200).json({ message: 'file fetched successfully'});
});




