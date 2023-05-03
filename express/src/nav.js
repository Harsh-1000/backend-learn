const express = require('express');

const app = express();

app.get("/",(req,res)=>{
    res.write("<h1>welcome to home page</h1>")
    res.write("<h1>welcome bhai</h1>")
    res.send();
})

app.get("/about",(req,res)=>{
    res.send("<h1>welcome to my about page</h1>")
})


app.get("/contact",(req,res)=>{
    res.status(200).send("welcome to my contact page")
})


app.get("/temp",(req,res)=>{
    res.send([
        {
            id:1,
            name:null,
        },
        {
            id:2,
            name:"binod bada",
        },
        {
            id:3,
            name:"binod chota",
        }
]);
})

app.listen(8000,()=>{
    console.log("listening 8000 port");
})

