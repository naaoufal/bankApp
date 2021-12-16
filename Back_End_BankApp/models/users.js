const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    fullname : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    balance : {
        type : Number,
        required : true
    }

})

module.exports = mongoose.model('users', userSchema)