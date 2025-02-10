import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const success = login(email, password);
        if (success){
            navigate('/dashboard');
        }
        
        // try {
        //     const userData = await authService.login({
        //         email, password
        //     });
        //     setUser(userData);
        //     localStorage.setItem('token', userData.token);
        //     navigate('/dashboard');
        // }
        // catch(err) {
        //     console.error('Login failed', err);
        // }
    };

    return (
        <div className="auth-container">
            <h2>
                Login
            </h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Email : 
                    </label>
                    <input 
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        required
                    />
                </div>
                <div>
                    <label>
                        Password : 
                    </label>
                    <input
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">
                    Login
                </button> 
            </form>
        </div>
    )
}

export default Login;