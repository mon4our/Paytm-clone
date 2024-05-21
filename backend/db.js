const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://mohitstudy:GTtYdayuxF5in5md@mohitruwatia.ka2ookq.mongodb.net/")

const user=mongoose.Schema({
    username: {
        type:String,
        required: true,
        unique: true,
        lowercase: true,
        maxLength: 30
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
    password: {
        type: String,
        minLength: 6,
        required: true
        }
})

const userModel=mongoose.model("userModel",user);
module.exports={userModel};