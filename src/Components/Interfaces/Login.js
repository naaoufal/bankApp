import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import './main.css'

const Login = () => {

    const navigation = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleClick = () => {
        navigation("/Inscription")
    }

    const handleLogin = () => {
        console.log("Login")
    }

    return(
        <div class="login">
            <div class="form">
                <form class="login-form">
                <span class="material-icons">Sign In</span>
                <input type="text" placeholder="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
                <input type="password" placeholder="password" required />
                <button onClick={handleLogin}>login</button>
                </form> 
                <p>
                    Don't have an account <a onClick={handleClick}>Sign Up</a>
                </p>
            </div>
        </div>
    )
}

export default Login