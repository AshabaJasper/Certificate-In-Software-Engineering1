const mongoose = require("mongoose");


const signup = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        minlength:2,
        maxlength:255,
        trim:true
    },
    lastname:{
        type:String,
        required:true,
        minlength:2,
        maxlength:255,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    dob:{
        type:String,
        required:true,
        trim:true,
        min: 10,
        max: 120
    },
    
    gender:{
        type:String,
        required:true,
        trim:true
    },
    country: {
        type: String,
        required: true 
    },
    phone1:{
        type:String,
        required:true,
        trim:true
    },
    phone2:{
        type:String,
        required:true,
        trim:true
    },
    town:{
        type:String,
        required:true,
        trim:true
    },
    state:{
        type:String,
        required:true,
        trim:true
    },
    zipcode:{
        type:String,
        trim:true
    },
    
    createdAt: {
        type: Date,
        default: Date.now
    }
})




module.exports = mongoose.model("Signup",signup)