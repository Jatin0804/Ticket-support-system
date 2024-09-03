import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";

const Register = () => {
    const [username, setUsername ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] =  useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await authService.register({
                username, email, password
            });
            navigate('/login');
        }
        catch (err) {
            console.error("Registration failed", err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">
                Register
            </button>
        </form>
    )
}

export default Register;