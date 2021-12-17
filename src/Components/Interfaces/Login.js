import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer, Zoom } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import './main.css'

const Login = () => {

    // init states :
    const navigation = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // init toast config :
    toast.configure()

    // our functions :
    const handleClick = () => {
        navigation("/Inscription")
    }

    const handleLogin = () => {
        if(email != "" && password != "") {
            fetch("http://localhost:3001/api/users/authentification", {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    email : email,
                    password : password
                })
            }).then(res => {
                return res.json()
            }).then(data => {
                if(data.accessToken) {
                    localStorage.setItem('token', data.accessToken)
                    fetch("http://localhost:3001/api/users/allUser").then(res => {
                        return res.json()
                    }).then(users => {
                        users.map(user => {
                            if(user.email == email && user.password == password) {
                                localStorage.setItem('userInfo', JSON.stringify(user))
                                navigation("/Home")
                            }
                        })
                    })
                } else {
                    toast.warning(data.message)
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
                <span class="material-icons">Sign In</span>
                <input onChange={event => setEmail(event.target.value)} type="text" placeholder="email" />
                <input onChange={event => setPassword(event.target.value)} type="password" placeholder="password" />
                <button onClick={handleLogin}>login</button>
                </div> 
                <p>
                    Don't have an account <a onClick={handleClick}>Sign Up</a>
                </p>
            </div>
        </div>
    )
}

export default Login