const express = require('express');

const app = express();

app.use(express.json());

const {mongoClient}=require('mongodb');

const url = 'mongodb://localhost:27017';

const client = new MongoClient(url);

client.connect();

app.get('/', (req, res) => {
    try {

        res.status(500).json({ msg: 'welcome to api' });

    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'internal server problem' });

    }
});
app.post('/adddata', (req, res) => {
    try {
        console.log(req.body);
        res.status(200).json({ msg: 'okay' })
    }
    catch (err) {
        console.log(err);
        res.status(200).json({ msg: 'internal server error' })

    }

})

app.listen(5000, () => {
    console.log('server is running on port 5000')
})