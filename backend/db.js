const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://mohitstudy:GTtYdayuxF5in5md@mohitruwatia.ka2ookq.mongodb.net/paytmApp")

const user= new mongoose.Schema({
    username: {
        type:String,
        required: true,
        unique: true,
        lowercase: true,
        maxLength: 30
        },
    password: {
        type: String,
        minLength: 6,
        required: true
        },
    fname: {
        type: String,
        maxLength: 30,
        required: true
        },
    lname: {
        type: String,
        maxLength: 30,
        required: true
        },
    
})

const accountSchema= new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    balance:{
        type:Number,
        required: true
    }
});

const Account=mongoose.model("Account",accountSchema)
const User=mongoose.model("User",user);
module.exports={User,Account};