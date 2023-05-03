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

const Collection = new mongoose.model('record', schema);

//update

const updateDocument = async (id) =>{

    try{
        // const result = await Collection.updateOne({_id:id},{$set:{name:'Express JS', ctype:'Back End'}})
        const result = await Collection.findByIdAndUpdate({_id:id},{$set:{name:'Express JS', ctype:'Back End'}},
        {
            new : true,
            useFindAndModify : false
        });

        console.log(result);
    }
    catch(err)
    {
        console.log(err);
        console.log('failed :<');
    }
   }

updateDocument("6424727c8854577919c7bcbc");