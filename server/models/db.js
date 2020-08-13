const mongoose  = require("mongoose");
const db        = new mongoose.Schema({
    username:{
            type:String,
            required:true,
    },
    subject:{
            type:String,
            required:true,
    },
    message:{
            type:String,
            required:true,
    },
    imageURL:{
            type:String,
            required:true,
    },
});

module.exports = mongoose.model('db',db);

