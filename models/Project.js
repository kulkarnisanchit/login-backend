const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    clientName:{
        type: String,
        require: true
    },
    startDate:{
        type: Date,
        default: Date.now
    },
    EndDate:{
        type: Date,
        default: Date.now
    },
    projectType:{
        type: String,
        require: true
    },
    assignedUsers: { 
        type : Array , 
        "default" : [] 
    }
});

module.exports = User = mongoose.model('projects', ProjectSchema);