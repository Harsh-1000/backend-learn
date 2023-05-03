const mongoose = require("mongoose");

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
        required: true
    },
    ctype: {
        type: String,
        required: true
    },
    video:{
        type: Number,
        default: 10
    },
    date: {
        type: Date,
        default: Date.now
    }
})

// collection

const Collection = new mongoose.model('Record',schema);

// read

const getDocument = async() =>{
    try{
        const result = await Collection.find();
        // const result = await Collection.find({ctype:"Front End"}).limit(1);
        //const result = await Collection.find().select({name:1, _id:0});
    
        console.log(result);
    }
    catch(err)
    {
        console.log(err);
    }
}
    
getDocument();