const express = require('express');
const router = new express.Router();
const Student = require('../models/students.js');

router.post("/students",async (req,res)=>{
    
    // console.log(req.body);
   try{
       const user = new Student(req.body);
       const result = await user.save();
       res.status(201);
       res.send(result);
       
   }
   catch(e)
   {
       res.status(400);
       res.send(e);
      
   }
   
})

// read

router.get('/students',async (req,res)=>{
   try{
       const studentData = await Student.find();
       res.send(studentData);
   }
   catch(e)
   {
       res.status(400);
       res.send(e);
      
   }
})

router.get("/students/:id", async (req,res)=>{
   try{
      // const _id = req.params;
       const _id = req.params.id;
       const result = await Student.findById(_id); 
       res.send(result);
   }
   catch(e){
       res.status(400);
       res.send(e); 
   }
})

//update 

router.patch("/students/:id", async (req,res) => {
   try{
       const _id = req.params.id;
       const update = await Student.findByIdAndUpdate(_id, req.body,{
           new:true,
       }); 
       res.send(update);
   }
   catch(e){
       res.status(400);
       res.send(e); 
   }
})

//delete

router.delete("/students/:id", async (req,res) =>{
   try{
       const id = req.params.id;
       const result = await Student.findByIdAndDelete({_id:id});
       res.send(result);
   }
   catch(e){
       res.status(400).send(e);
   }
})

module.exports = router;

// adding express router

// 1: create a new router
// const router = new express.Router();

//  2: we need to define the router

// router.get("/thapa",(req,res)=>{
//     res.send("hello bhai");
// })

// 3: we need to register our router
// app.use(router);