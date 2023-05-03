const express = require('express');
const app = express();
const path = require('path');

// console.log(__dirname);

const staticPath = path.join(__dirname,'../public');  
const templatePath = path.join(__dirname,'../template');

//to set the view engine

app.set('view engine', 'hbs');
app.set('views', templatePath);

//built in middleware
//app.use(express.static(staticPath));

//template engine route

app.get("",(req,res)=>{
    res.render('index', {
        name: 'binod',
    });
})

app.get("/about",(req,res)=>{
    console.log(req.query.name);
    res.render('about');
})

app.get('*',(req,res)=>{
    res.render('404');
});

app.listen(8000,()=>{
    console.log("listing the port at 8000");
});