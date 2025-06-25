const mongoose = require('mongoose');


const todaySchema = new mongoose.Schema({

    cateid:{
        type:String,
        require:true,
    },

    name : {
        type: String,
        required: true
    },

    cate:{
        type:String,
        require:true,
    },

    
},{ timestamps: true });

module.exports = mongoose.model('category', todaySchema);