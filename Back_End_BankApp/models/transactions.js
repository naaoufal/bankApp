const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({

    emiterId : {
        type : String,
        required : true
    },
    recieverId : {
        type : String,
        required : true
    },
    transactionValue : {
        type : Number,
        required : true
    },
    date : {
        type : Date,
        required : true
    }

})

module.exports = mongoose.model('transactions', transactionSchema)