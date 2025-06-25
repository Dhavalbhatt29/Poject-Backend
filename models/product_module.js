const mongoose = require('mongoose');


const todaySchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true,
        
    },
    cateid:{
        type:String,
        require:true,
    },

    gid:{
        type:String,
        require:true
    },
    price : {
        type: Number,
        required: true,
        
    },

    
},{ timestamps: true });

module.exports = mongoose.model('product', todaySchema);