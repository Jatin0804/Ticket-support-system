import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
// import authService from "../../services/authService";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
    const [ username, setUsername ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] =  useState('');
    const register = useContext(AuthContext);
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
        <div className='auth-container'>
            <h2>
                Register
            </h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Username : 
                    </label>
                    <input 
                        type="text"
                        placeholder="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>
                        Email : 
                    </label>
                    <input
                        type="email"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                    Register
                </button>
            </form>
        </div>
    )
}

export default Register;