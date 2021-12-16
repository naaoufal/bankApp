const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')

// public apis

router.post("/addOne", userController.createUser)

router.get("/allUser", userController.allUser)

router.post("/authentification", userController.authentification)

router.patch("/edit/:id", userController.edit)

module.exports = router