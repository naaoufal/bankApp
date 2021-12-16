const mongoose = require('mongoose')

const walletSchema = new mongoose.Schema({

    userId : {
        type : String,
        required : true
    },
    balance : {
        type : Number,
        required : true
    }

})

module.exports = mongoose.model('wallets', walletSchema)