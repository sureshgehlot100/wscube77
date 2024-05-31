const express = require('express');

require('dotenv').config();
const path =require('path');


const app = express();

const htmlpath = path.join(__dirname,'public');

app.use(express.static(htmlpath));


app.get("/",(req,res)=>{
    res.sendFile(`${htmlpath}/home.html`)
});
app.get("/about",(req,res)=>{
    res.sendFile(`${htmlpath}/about.html`)
});
app.get("/contact",(req,res)=>{
    res.sendFile(`${htmlpath}/contact.html`)
});
app.get("/read_rules",(req,res)=>{
    res.sendFile(`${htmlpath}/file-sample_150kB.pdf`)
});
app.get("/*",(req,res)=>{
    // attention here /* is require//
    res.sendFile(`${htmlpath}/404.html`)
});

app.listen(process.env.PORT,()=>{

    console.log(`Server is running on port ${process.env.PORT}`)

});



