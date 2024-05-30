const http = require('https');


const server = (req,res)=>{
    
    

    const param = url.parse(req.url,true);

    console.log(param)
   
    
  if(req.method == 'GET' && param.href == '/home'){
    res.end('get called home');
    

  }
  else if (req.method == 'POST' && param.href == '/about'){

    res.end('post called about');
  }


}

http.createServer(server).listen(5000);