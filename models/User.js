const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    avatar:{
        type: String
    },/*
    date:{
        type: Date,
        default: Date.now
    } ,
    inTime:{
        type: String,
        require: true
    },
    outTime:{
        type: String,
        default: Date.now
    },*/
    phoneNumber:{
        type: Number,
        //require: true
    },
    userType:{
        type: String,
        //require: true
    }
});

module.exports = User = mongoose.model('users', UserSchema);