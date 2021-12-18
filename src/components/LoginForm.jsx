import React, { useState } from 'react'
import axios from 'axios'

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');
    // console.log(process.env.REACT_APP_BASE_URL)
    // console.log(username)
    // console.log(password)

    const handleClick = async (e) => {
        e.preventDefault()

        const authObject = {
            "Project-ID": process.env.REACT_APP_PROJECT_ID,
            "User-Name": username,
            "User-Secret": password
        }

        try {
            // username & password ==> chatengine --> give message
            await axios.get(process.env.REACT_APP_BASE_URL, { headers: authObject })

            // works out --> logged in
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)

            window.location.reload()
            setError('');

        } catch (error) {

            // error --> try with another account
            setError('Oops, incorrect credentials!');
            // console.log(error)

        }




    }

    return (
        <div className='wrapper'>
            <div className="form">
                <h1 className='title'>Envoy</h1>
                <form >
                    <input
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        className='input'
                        placeholder='Username'
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className='input'
                        placeholder='Password'
                        required
                    />
                    <div align='center'>
                        <button
                            type='button'
                            className='button'
                            onClick={handleClick}
                        >
                            <span>Start Chatting</span>
                        </button>
                    </div>
                </form>
                <h3 className='error'>{error}</h3>
            </div>
        </div>
    )
}

export default LoginForm
