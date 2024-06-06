const express = require('express');

const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const database = async () => {
    await client.connect();
    const db = await client.db('test_databse_tmp');

    // const adminCollection = await db.collection('admins');

    return db;
}

const insertData = async () => {
    const db = await database();

    const adminCollection = await db.collection('users');

    const response = await adminCollection.insertOne({
        name: 'user',
        password: '2344455@'
    });
    console.log(response);
}
//insertData();

const readData = async () => {
    try {
        const db = await database();
        const collection = await db.collection('admins');

        const response = await collection.find().toArray();

        console.log(response);

    }
    catch (err) {

        console.log(err);

    }

};
//readData();

const updateData = async () => {
    try {
        const db = await database();
        const collection = await db.collection('admins');

        const updateResult = await collection.updateOne(
            { name: 'user' },
            { $set: { name: 'suresh' } });
        console.log(updateResult);

    }
    catch (err) {

        console.log(err);

    }

};
//updateData();
const deleteData = async () => {
    try {
        const db = await database();
        const collection = await db.collection('admins');

        const deleteResult = await collection.deleteOne({ name: 'user' });
           
        console.log(deleteResult);

    }
    catch (err) {

        console.log(err);

    }

};
deleteData();

const app = express();

app.use(express.json());

app.listen(5500, () => {
    console.log('server is running on port 5500')
})


const { mongoClient } = require('mongodb');

