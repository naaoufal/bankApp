import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { toast, ToastContainer, Zoom } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import './main.css'

 const Home = () => {

    // init states :
    const navigation = useNavigate()
    const [id, setId] = useState("")
    const [solde, setSolde] = useState("")

    // init toast config :
    toast.configure()

    // config data in local storage to be readebale
    const info = JSON.parse(localStorage.getItem('userInfo'))

    // our function :
    const handleSend = () => {
        fetch(`http://localhost:3001/api/users/edit/${info._id}`, {
            method : 'PATCH',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                recieverId : id,
                balance : solde
            })
        }).then(res => {
            return res.json()
        }).then(data => {
            console.log(data)
        })
    }

    const handleHistory = () => {
        navigation("/Transactions")
    }

    const logOut = () => {
        localStorage.clear();
        navigation("/")
    }

     return(
         <div class="login">
             <div class="form">
                <div class="login-form">
                    <span class="material-icons">Home</span>
                    <h3>General Informatios :</h3>
                    <p>RIB : {info._id}</p>
                    <p>Full name : {info.fullname}</p>
                    <p>My Balance : {info.balance || info.balance - solde}</p>
                    
                    <div class="sub">
                        <input onChange={event => setId(event.target.value)} placeholder="Please enter the reciever RIB" type="text" required />
                        <input onChange={event => setSolde(event.target.value)} placeholder="Please enter the balance" type="number" required />
                        <button onClick={handleSend} id="send">Send</button>
                        <button id="tra" onClick={handleHistory}>My Transactions</button>
                    </div>
                    <button onClick={logOut}>LogOut</button>
                </div>
             </div>
         </div>
     )
 }

 export default Home