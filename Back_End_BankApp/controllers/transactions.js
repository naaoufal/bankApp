const Transaction = require('../models/transactions')

// get transaction by Id :
const transactionById = async (req, res) => {
    try {
        const id = req.params.id
        let filted = []
        const transacion = await Transaction.find()
        transacion.map(element => {
            if(element.emiterId == id) {
                filted.push(element)
                // console.log(element)
            }
        })
        res.json(filted)
    } catch (error) {
        res.json({ message : error.message })
    }
}

// get ALl Transactions : 
const allTransactions = async (req, res) => {
    try {
        const transaction = await Transaction.find()
        res.json(transaction)
    } catch (error) {
        res.json({ message : error.message })
    }
}

module.exports = {
    transactionById,
    allTransactions
}