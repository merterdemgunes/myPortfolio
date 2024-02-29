//Register.jsx
import React from 'react';
import "../components/RegisterLoginStyles.css";
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigateTo  = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/register', { email, password });
            setMessage(response.data.message);
            if(response.data.success){
              navigateTo("/login");
            } else {
              setMessage(response.data.message);
            }
        } catch (error) {
            setMessage('Error registering. Please try again.'); 
            console.error(error);
        }
      };

    return (
        <div>
            <div className="login-register-container">
                <h1 className='login-register-title'>Register</h1>

                <div className="login-register-body">
                    {message && <p>{message}</p>}

                    <form action="/register" method="POST" onSubmit = {handleSubmit}>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input onChange = {(e) => {setEmail(e.target.value)}} 
                            type="email" name="username" value={email}/>
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input onChange = {(e) => {setPassword(e.target.value)}}  
                            type="password" name="password" value={password}/>
                        </div>
                        <button type="submit" className="btn">Register</button>
                    </form>

                </div>
            </div>
        </div>
  )
}

export default Register

