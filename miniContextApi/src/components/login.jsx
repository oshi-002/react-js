import React , {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [username , setUsername] = React.useState([])
    const [password , setPassword] = React.useState([])
    const {setUser}= useContext(useContext)

    const handleSubmit =(e)=>{
e.preventDefault()
setUser(username, password)

    }
    return (
        <div>
            <h2>Login</h2>
            <input type='text'
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            placeholder='Username' />

            <input type='text'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder='Password' />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
