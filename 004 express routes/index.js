const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('hello');

})
app.get('/home',(req,res)=>{
    res.send('home')

})
app.post('/',(req,res)=>{
    res.send('hello');

})
app.post('/home',(req,res)=>{
    res.send('home post');

});

app.listen(5300, () => {
    console.log(`Server is runing on port 5300`);

});
