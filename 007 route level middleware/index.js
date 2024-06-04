const express = require('express');

const router1 = express.Router();

const router2 = express.Router();

const app=express();

const m1 = (req,res,next)=>{
    console.log('m1 called');

    next();

}
const m2 = (req,res,next)=>{
    console.log('m2 called')
    next();
}

router1.use(m1);
router2.use(m2);

app.get('/',(req,res)=>{
    res.send("Hello world");
});
app.get('/hello user',(req,res)=>{
    res.send("Hello user");
});

router1.get('/user',(req,res)=>{
    res.send('r1_user_get')
});
router1.get('/home',(req,res)=>{
    res.send('r1_home_get')
});
router1.post('/user',(req,res)=>{
    res.send('r1_user_post')
})
router2.get('/user',(req,res)=>{
    res.send('r1_user_get')
})
router2.post('/user',(req,res)=>{
    res.send('r1_user_post')
})
app.use('route1',router1);
app.use('route2',router2);

app.listen(5500,()=>{
    console.log('server is running on port 5500');
})


