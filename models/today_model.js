const mongoose = require('mongoose');


const todaySchema = new mongoose.Schema({
    Name : {
        type: String,
        required: true
    },
    Email : {
        type: String,
        required: true,
        
    },
    Password : {
        type: String,
        required: true,
        
    },

    Birthdate : {
        type: Date,
        required  : true
        },

    ContactNo : {
        type  : Number,
        required : true
        },
    
    Gender: {
        type: String,
        required: true
    }, 
    
    City :{
        type: String,
        required: true
    }
},{ timestamps: true });

module.exports = mongoose.model('today', todaySchema);