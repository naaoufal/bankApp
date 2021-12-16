const express = require("express")
const router = express.Router()
const walletController = require("../controllers/wallet")

// public apis :

router.get("/allWallets", walletController.allWallets)

router.patch("/sendBalance/:id", walletController.sendBalance)

router.patch("/edit/:id", walletController.edit)

module.exports = router