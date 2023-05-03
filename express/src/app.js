const express = require('express');
const app = express();


// app.get(route,callback(req,res))

// API 
// get - read data
// post - create data
// put - update data
// delete - delete data

app.get("/",(req,res) => {
    res.send("hello from the express");
});

app.get("/about",(req,res)=>{
    res.send("hello from about");
})

app.listen(8000,()=>{
    console.log("listing the port at 8000");
});