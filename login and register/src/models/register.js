const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); 
const jwt = require("jsonwebtoken");
const employeeSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required: true,
    },
    lastName : {
        type: String,
        required: true,
    },
    password : {
        type: String,
        required: true,
    },
    confirmPassword : {
        type: String,
        required: true,
    },
    gender : {
        type: String,
    },
    email : {
        type: String,
       required: true
    },
    tokens: [
        {
            token : {
                type:String,
                required:true
            }
        }
       ]

})

//middleware

employeeSchema.methods.generateAuthToken = async function()
{
    try {
        console.log(this._id);
        const usertoken = jwt.sign({_id:this._id.toString()},process.env.SECRET_KEY);
        
        this.tokens = this.tokens.concat({token:usertoken});
        await this.save();
        console.log("ok");
        return usertoken;
    }
    catch(err)
    {
        res.send("the error part: " + e);
        console.log("the error part: " + e);
    }
}

employeeSchema.pre("save", async function (next) {
    if(this.isModified("password")){
       // const passwordHash = await bcrypt.hash(password,10);
       console.log(this.password);
       this.password = await bcrypt.hash(this.password,10);
       console.log(this.password);
    }
    next();
} )
const Register = new mongoose.model('Record',employeeSchema);

module.exports = Register;