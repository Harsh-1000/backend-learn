const http = require('http');
const fs = require('fs');

 const server = http.createServer((request,response)=>
 {
   console.log(request.url);

   if(request.url =='/'){
      response.end('hello from the otherside');
   }
   else if(request.url == "/about")
   {
      response.end('hello from the About us side');
   }
   else if(request.url == "/userapi")
   {
      

      fs.readFile(`${__dirname}/UserApi/userapi.json`,'utf-8',(err,jsondata) =>{
         const objdata = JSON.parse(jsondata);
         console.log(objdata);
         response.end(jsondata);
      });

      
   }
   else if(request.url == "/contact")
   {
      response.write('hello from the Contact us side');
      response.end();
   }
   else{
        
      response.writeHead(404,{"Content-type" : "text/html"});
      response.end('<h1>page not found</h1>');
   }
 })

//  127.0.0.1 => local host

 server.listen(8000,"127.0.0.1", () =>{
    console.log("listening to the port no 8000");
 })  