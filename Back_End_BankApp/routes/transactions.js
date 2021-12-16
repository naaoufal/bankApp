const express = require('express')
const router = express.Router()
const transactionController = require('../controllers/transactions')

router.get("/transactionById/:id", transactionController.transactionById)

router.get("/allTransactions", transactionController.allTransactions)

module.exports = router