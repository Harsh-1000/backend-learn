const mongoose = require('mongoose');

mongoose.connect("mongodb://0.0.0.0:27017/harshdatabase")
.then(()=>{
    console.log("connection successful :)");
})
.catch((err)=>{
    console.log(err);
    console.log("connection failed :(");
});

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ctype: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

//collection cretion

const Collection = new mongoose.model('Record',schema);

//create document

const createDocument = async() => {
    try{
        const node = new Collection({
            name: "Node JS",
            ctype: "Back End",
        })

        const react = new Collection({
            name: "React JS",
            ctype: "Front End",
        })

        const express = new Collection({
            name: "Express JS",
            ctype: "Framework",
        })

        const mongodb = new Collection({
            name: "Node JS",
            ctype: "Database",
        })


        const result = await Collection.insertMany([node,react,express,mongodb]);
        console.log(result);
    }

    catch(err){
        console.log(err);
    }
}

createDocument();