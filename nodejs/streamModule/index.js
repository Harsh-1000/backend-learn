 const http = require('http');

 const server =  http.createServer();

 server.on('request',(req,res)=>{
    const fs = require('fs');
    // fs.readFile('input.txt',(err,data)=>{
    //     if(err)
    //         return console.log(err);
        
    //     res.end(data.toString());
    // });

    //stream way

    const rstream = fs.createReadStream('input.txt');

    // rstream.on('data',(chunkdata)=>{
    //     res.write(chunkdata);
    // }) 

    // rstream.on('end',()=>{
    //     res.end();
    // })

    // rstream.on('error', (error)=>{
    //     console.log(error);
    //     res.end('file not found');
    // })

    rstream.pipe(res);
 });

 server.listen(8000,"127.0.0.1");
