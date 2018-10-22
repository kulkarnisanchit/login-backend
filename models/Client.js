const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    avatar:{
        type: String,
    },
    phoneNumber:{
        type: Number,
    }
});

module.exports = User = mongoose.model('clients', ClientSchema);