const data = require('./data');

const http = require('http');
const server =(req,res)=>{
 res.end(JSON.stringify(data.data));
};

http.createServer(server).listen(5200);


console.log(data);

