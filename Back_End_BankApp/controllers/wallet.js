const Wallet = require('../models/wallet')

// Get all wallets :
const allWallets = async (req, res) => {
    try {
        const wallets = await Wallet.find()
        res.json(wallets)
    } catch (error) {
        res.json({ message : error.message})
    }
}

// send money test :
const sendBalance = async (req, res) => {

    if(!req.body) {
        return res.send({ message : "They is no data in the body !!!" })
    }

    // config for emiter solde :

    const id = req.params.id

    const recieverId = req.body.recieverId

    const wallet = Wallet.map(async (element) => {
        return element;
    })

    res.json(wallet)

    // const newSolde = wallet.balance - req.body.solde

    // await wallet.updateOne({ $set : { balance : newSolde }})

}

const edit = async (req, res) => {
    if(!req.body){
        return res.send({message : "They is no Data to edit"})
    }
    const id = req.params.id
    console.log(req.body.balance + req.body.balance)
    Wallet.findByIdAndUpdate(id, req.body, { userFindAndModify: false }).then(data => {
        if(!data) {
            res.send({
                message : "they is no wallet !"
            })
        } else {
            res.send({message : "Wallet updated successfully"})
        }
    })
}


module.exports = {
    allWallets,
    sendBalance,
    edit
}