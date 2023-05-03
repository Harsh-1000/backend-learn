require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
require("./db/connect");
const Register = require("./models/register");
const bcrypt = require('bcryptjs'); 
const path = require('path');
const hbs = require('hbs');
const jwt = require("jsonwebtoken");
const { log } = require('console');

//const { log } = require('console');

const staticPath = path.join(__dirname,'../public');
const viewPath = path.join(__dirname,'../templates/views');
const partialPath = path.join(__dirname,'../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewPath)
hbs.registerPartials(partialPath);
app.use(express.static(staticPath));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
  res.render('index')
})

app.get("/login", (req,res)=>{
  res.render("login");
})

app.get("/register", (req,res)=>{
  res.render("register");
})


app.post("/login",async (req,res)=>{
    try{
      const matchEmail = req.body.email;
      const matchPassword = req.body.password;
      // console.log(matchEmail + " -> " + matchPassword);
      
      const result = await Register.findOne({email:matchEmail});
      
      const isMatch = await bcrypt.compare(matchPassword,result.password);
      

      const token = await result.generateAuthToken();
      console.log("the token part => " + token);


      if(isMatch)
      {
        res.status(201).render("index");
        console.log(result);
        
      res.cookie("jwt",token,{
        expires:new Date(date.now() + 30000),
        httpOnly:true
      });
      
      }
      else
      {
        res.send("invalid details")
      }

    }
    catch(e)
    {
      res.status(400).send(e);
    }
})



app.post("/register",  async (req,res) =>{
  try{
   // console.log(req.body.firstname);
   const password = req.body.password;
   const cpassword = req.body.cpassword;

   if(password===cpassword)
   {
    //const passwordHash =  await hashing(password);
    const registerEmployee = new Register({
        firstName : req.body.firstname,
        lastName : req.body.lastname,
        password : password,
        confirmPassword : cpassword,
        gender : req.body.gender,
        email : req.body.email
    })

    console.log("the success part" + registerEmployee);
    const token = await registerEmployee.generateAuthToken();
    console.log("the token part => " + token);

    // the res.cookie function is used to set the cookie name to value.
    // The value parameter may be a string or object converted to JSON.

    // Syntax:
    // res.cookie(name, value, [option])


    res.cookie("jwt",token,{
      expires:new Date(date.now() + 30000),
      httpOnly:true
    });
    console.log(cookie);
    const result = await registerEmployee.save();
    
    res.status(201).render("index");
   }
   else{
    res.send("passw ord are not matching")
   }
  }
  catch(e)
  {
    res.status(400).send(e);
    console.log("error he bhai");
  }
} )

// const hashing = async (password) =>{
//   const passwordHash = await bcrypt.hash(password,10);
//   console.log(passwordHash);
//   return passwordHash;
// }

// const bcrypt = require('bcryptjs');

// const securePassword = async (password) =>{
//   const passwordHash = await bcrypt.hash(password,10);
//   console.log(passwordHash);

//   const passwordMatch = await bcrypt.compare(password,passwordHash);
//   console.log(passwordMatch);
// }
// securePassword("thapa@123");



//json web token 

// const createToken = async() =>{
//   const token = await jwt.sign({_id:"6435b5fb3630ebfc59cd4e22"},"mynameisharshsharmamyfavouriteanimeisonepiece",{expiresIn:"10 seconds"} )
//   console.log(token);

//   const userVerification = await jwt.verify(token,"mynameisharshsharmamyfavouriteanimeisonepiece")
//   console.log(userVerification);
// }

// createToken();

app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
})

