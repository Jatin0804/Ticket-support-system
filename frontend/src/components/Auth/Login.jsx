import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
    const [email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userData = await authService.login({
                email, password
            });
            setUser(userData);
            localStorage.setItem('token', userData.token);
            navigate('/dashboard');
        }
        catch(err) {
            console.error('Login failed', err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="email"
                placeholder="Email"
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
                Login
            </button> 
        </form>
    )
}

export default Login;