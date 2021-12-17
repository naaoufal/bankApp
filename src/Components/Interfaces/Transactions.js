import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { toast, ToastContainer, Zoom } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import './main.css'

const Transactions = () => {

    // init states :
    const navigation = useNavigate()
    const [my, setMy] = useState([])

    // config data in local storage to be readebale
    const info = JSON.parse(localStorage.getItem('userInfo'))

    const fetchData = () => {
        fetch(`http://localhost:3001/api/transactions/transactionById/${info._id}`).then(res => {
            return res.json()
        }).then(data => {
            setMy(data)
        })
    }

    const handleHome = () => {
        navigation("/Home")
    }

    useEffect(() => {
        fetchData()
    }, [])

    return(
        <div class="">
            <div class="form">
                <span class="material-icons">My history</span>
                <h3>This table represent all my transaction :</h3>
                <div id="mytable">
                    <table id="trans">
                        <tr>
                            <th>ID</th>
                            <th>Emiter RIB</th>
                            <th>Reciever RIB</th>
                            <th>Solde</th>
                            <th>Date</th>
                        </tr>
                        <tbody>
                            {my.map(element => (
                                <tr>
                                    <td>{element._id}</td>
                                    <td>{element.emiterId}</td>
                                    <td>{element.recieverId}</td>
                                    <td>{element.transactionValue}</td>
                                    <td>{element.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <br/>
                    <button onClick={handleHome} id="but">Back to Home</button>
                </div>
            </div>
        </div>
    )
}

export default Transactions