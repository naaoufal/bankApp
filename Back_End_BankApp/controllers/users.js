const User = require('../models/users')
const Wallet = require('../models/wallet')
const Transaction = require('../models/transactions')
const jwt = require('jsonwebtoken')
require('dotenv').config()

// post a new user inscription :
const createUser = async (req, res) => {
    const user = new User({
        fullname : req.body.fullname,
        phone : req.body.phone,
        email : req.body.email,
        password : req.body.password,
        balance : 10000
    })
    try {
        const newUser = await user.save()
        // console.log(newUser._id)
        res.json(newUser)
        // if(newUser) {
        //     const wallet = new Wallet({
        //         userId : newUser._id,
        //         balance : 10000 // as an example of balance of account
        //     })
        //     await wallet.save()
        //     res.json(newUser)
        // }
    } catch (error) {
      res.json({ message : error.message })
    }
}

// list all user :
const allUser = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        res.json({ message : error.message })
    }
}

// authantification of users using jwt :
const authentification = async (req, res, next) => {
    const { email, password } = req.body
    User.findOne({
        email : email,
        password : password
    }).then(user => {
        if(!user) {
            res.json({ message : "Not Allowed !!!" })
        } else {
            const email = req.body.email
            const password = req.body.password
            const us = { usemail : email, uspassword : password }
            const accessToken = jwt.sign(us, process.env.ACCESS_TOKEN)
            res.json({ accessToken : accessToken })
            res.us = us
            next()
        }
    })
}

// Updating a user (send or recieve balance) :
const edit = async (req, res) => {
    if(!req.body) {
        return res.send({ message : "They is no data in the body !!!" })
    }

    const id = req.params.id
    const recieverId = req.body.recieverId
    
    const user = await User.findById(id)

    emiterBalance = user.balance - req.body.balance

    user.updateOne({ $set : { balance : emiterBalance } }, async (err, data) => {
        if(data) {

            const reciever = await User.findById(recieverId)

            recieverBalance = parseInt(reciever.balance) + parseInt(req.body.balance)

            reciever.updateOne({ $set : { balance : recieverBalance } }, async (err, succes) => {

                if(succes) {

                    const transaction = new Transaction({
                        emiterId : id,
                        recieverId : recieverId,
                        transactionValue : req.body.balance,
                        date : Date.now()
                    })

                    await transaction.save()

                }
            })

            res.json({ message : "Sending Solde Succes" })

        }
    })
}

module.exports = {
    createUser,
    allUser,
    authentification,
    edit
}