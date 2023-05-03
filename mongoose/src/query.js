// https://www.mongodb.com/docs/manual/reference/operator/query/

const mongoose = new require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/harshdatabase')
.then(()=>{
    console.log('connection successful :)');
})
.catch((e)=>{
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
    date: {
        type: Date,
        default: Date.now
    },
    video:{
        type: Number,
        default: 10
    }
})

// create colletion 

const Collection = new mongoose.model('record',schema);

const getDocument = async ()=>{
    try{
        // const result = await Collection.find({video: 50});
        // const result = await Collection.find({video: {$gte: 50}});
        // const result = await Collection.find({ctype: {$in: ['Back End', 'Database']}});
        // const result = await Collection.find({$and: [{ctype: {$nin: ['Back End', 'Database']}},{video: {$gt: 50}}]});
        // const result = await Collection.find({$or: [{ctype: {$nin: ['Back End', 'Database']}},{video: {$gt: 50}}]});
        
        // sorting and counting

        //count 

        // const result = await Collection.find({$or: [{ctype: {$nin: ['Back End', 'Database']}},{video: {$gt: 50}}]})
        // .countDocuments();
        
        //sort

        const result = await Collection.find().select({name:1}).sort({video:-1})
        console.log(result);
    }
    catch(err)
    {
        console.log(err);
        console.log("failed :(");
    }
}

getDocument();

