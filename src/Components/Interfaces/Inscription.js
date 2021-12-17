import { Navigate, useNavigate } from 'react-router-dom'
import './main.css'

const Inscription = () => {

    const navigation = useNavigate()

    const handleClick = () => {
        navigation("/")
    }

    const handleSubmit = () => {
        console.log("Inscription")
    }

    return(
        <div class="login">
            <div class="form">
                <form class="login-form">
                <span class="material-icons">SignUp</span>
                <input type="text" placeholder="full name" required />
                <input type="text" placeholder="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
                <input type="text" placeholder="phone" required />
                <input type="password" placeholder="password" required />
                <button onClick={handleSubmit}>Inscription</button>
                </form> 
                <p>
                    Already have an account <a onClick={handleClick}>Sign In</a>
                </p>
            </div>
        </div>
    )
}

export default Inscription