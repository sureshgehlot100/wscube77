const express = require('express');

const app = express();

const token = 'e5432';

const checkToken = (req, res, next) => {

   const userToken = req.params.val;

   if(!userToken){

    res.status(400).Json({msg:"plz Add token"});
   }
   else if(userToken !=token){
    res.status(401).Json({msg:"invaild token"})
   }
   else{
    next();
   }  
};

app.use(checkToken);

app.get('/user/:val?', checkToken, (req, res) => {

    res.status(200).json({msg:'Api fatched successfully'});
})
app.get('/admin/:val?', checkToken, (req, res) => {

    res.status(200).json({msg:'Api fatched successfully'});
})
app.get('/client/:val?', checkToken, (req, res) => {

    res.status(200).json({msg:'Api fatched successfully'});
})

app.listen(5700, () => {

    console.log('server is running on port 5700');
})