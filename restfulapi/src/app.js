const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
require('./db/connection.js');

const router = require("./routers/studentRouter.js")
app.use(express.json()); //middleware

app.use(router);

app.listen(port,()=>{
    console.log('server connected :)');
})


// app.post("/students",async (req,res)=>{
    
//      // console.log(req.body);
//     try{
//         const user = new Student(req.body);
//         const result = await user.save();
//         res.status(201);
//         res.send(result);
        
//     }
//     catch(e)
//     {
//         res.status(400);
//         res.send(e);
       
//     }
    
// })

// // read

// app.get('/students',async (req,res)=>{
//     try{
//         const studentData = await Student.find();
//         res.send(studentData);
//     }
//     catch(e)
//     {
//         res.status(400);
//         res.send(e);
       
//     }
// })

// app.get("/students/:id", async (req,res)=>{
//     try{
//        // const _id = req.params;
//         const _id = req.params.id;
//         const result = await Student.findById(_id); 
//         res.send(result);
//     }
//     catch(e){
//         res.status(400);
//         res.send(e); 
//     }
// })

// //update 

// app.patch("/students/:id", async (req,res) => {
//     try{
//         const _id = req.params.id;
//         const update = await Student.findByIdAndUpdate(_id, req.body,{
//             new:true,
//         }); 
//         res.send(update);
//     }
//     catch(e){
//         res.status(400);
//         res.send(e); 
//     }
// })

// //delete

// app.delete("/students/:id", async (req,res) =>{
//     try{
//         const id = req.params.id;
//         const result = await Student.findByIdAndDelete({_id:id});
//         res.send(result);
//     }
//     catch(e){
//         res.status(400).send(e);
//     }
// })





// You DO NOT NEED express.json() and express.urlencoded() 
// for GET Requests or DELETE Requests. We only need it for
// post and put req.

// express.json() is a method inbuilt in express to recognize the incoming
// Request Object as a JSON Object. This method is called as a middleware
// in your application using the code: app.use(express.json());