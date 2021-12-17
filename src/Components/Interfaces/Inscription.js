import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { toast, ToastContainer, Zoom } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import './main.css'

const Inscription = () => {

    // init states :
    const navigation = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")

    // init toast config :
    toast.configure()

    const handleClick = () => {
        navigation("/")
    }

    const handleSubmit = () => {
        if(email != "" && password != "" && phone != "" && name != "") {
            // console.log(email, name, password, phone)
            fetch("http://localhost:3001/api/users/addOne", {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    fullname : name,
                    email : email,
                    phone : phone,
                    password : password
                })
            }).then(res => {
                return res.json()
            }).then(data => {
                if(data) {
                    toast.success("Account Created we will redirect u to Sign In page")
                    navigation("/")
                } else {
                    toast.warning("Error")
                }
            })
        } else {
            toast.warning("Please enter all the fields")
        }
    }

    return(
        <div class="login">
            <div class="form">
                <div class="login-form">
                <span class="material-icons">SignUp</span>
                <input onChange={event => setName(event.target.value)} type="text" placeholder="full name" required />
                <input onChange={event => setEmail(event.target.value)} type="text" placeholder="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
                <input onChange={event => setPhone(event.target.value)} type="text" placeholder="phone" required />
                <input onChange={event => setPassword(event.target.value)} type="password" placeholder="password" required />
                <button onClick={handleSubmit}>Inscription</button>
                </div> 
                <p>
                    Already have an account <a onClick={handleClick}>Sign In</a>
                </p>
            </div>
        </div>
    )
}

export default Inscription