const mongoose = require("mongoose");
const valid = require('validator');


mongoose.connect("mongodb://0.0.0.0:27017/harshdatabase")
.then(()=>{
    console.log("conection successful :)");
})
.catch((err)=>{
    console.log(err);
    console.log("connection unsuccessful :(");
})

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        lowercase:true,
        trim:true,
        minlength : [2 , "minnimum 2 letters"],
        maxlength : 30
    },
    ctype: {
        type: String,
        required: true,
        enum: ['Front End', 'Database', 'Framework', 'Back End']
    },
    video:{
        type: Number,
        default: 10,
        //custom validation
        validate(value){ 
            if(value<0){
                throw new Error("video count should not be negative")
            }
        }
        // 2nd way
        // validate: {
        //     validator: function(value){
        //         return value.length < 0
        //     },
        //     message: "video count should not be negative"
        // }
    },
    date: {
        type: Date,
        default: Date.now
    },
    author: String,
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value){
            if(!valid.isEmail(value))
            {
                throw new Error("Email is inValid");
            }
        }
    }
    
})

// collection

const Collection = new mongoose.model('Record',schema);

// read

const createDocument = async() =>{
    try{
        const document = new Collection({
            name: "HTML",
            ctype: "Front End",
            video: 50,
            author:"Harsh",
            email:"rrr@go"
        })
        const result = await document.save();
        console.log(result);
    }

    catch(err){
        console.log(err);
    }
    
}

createDocument();