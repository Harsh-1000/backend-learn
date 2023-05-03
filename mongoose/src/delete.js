const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/harshdatabase')
.then(()=>{
    console.log('connection successful :)');
})
.catch((err)=>{
    console.log(err);
    console.log('connection failed :(');
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

// create collection

const Collection = new mongoose.model('record',schema);

const deleteDocument = async (_id) =>{
    try{
        // const result = await Collection.deleteOne({_id})
        const result = await Collection.findByIdAndDelete({_id})

        console.log(result);
    }
    catch(err)
    {
        console.log(err);
        console.log('failed :(');
    }
}


deleteDocument('6424727c8854577919c7bcbc');