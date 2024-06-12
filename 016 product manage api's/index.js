const express = require('express');
const allroutes = require('./src/app');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use(allroutes);



app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`);
});