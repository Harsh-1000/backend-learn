const mongoose = require('mongoose');

// connection creation and cretion of new database

mongoose.connect("mongodb://0.0.0.0:27017/ttchanell")
.then(()=>{
    console.log("connection successful :)");
})
.catch((err)=>{
    console.log(err);
    console.log("connection failed :(");
});

//A Mongoose schema defines the structure of the document,
// default values, validators, etc.,

const playlistSchema = new mongoose.Schema({

    name : {
        type: String,
        required : true
    },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

// A Mongoose model is a wrapper on the Mongoose schema.
// Amongoose schema defines the structure of the document, 
// default values, validators, etc., where as a Mongoose model
//provides an interface to the database for creating,
// querying, updating, deleting records, etc.



//collection creation 

const Playlist = new mongoose.model('Playlist',playlistSchema);

// create document

const createDocument = async() =>{
    try{
        const reactPlaylist = new Playlist({
            name: "Node JS",
            ctype: "Back End",
            videos: 100,
            author: "Thapa Technical",
            active: true
        })
        const result = await reactPlaylist.save();
        console.log(result);
    }

    catch(err){
        console.log(err);
    }
    
}

createDocument();

// insert document


// schema -> document
// model -> collections