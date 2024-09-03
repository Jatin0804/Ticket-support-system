import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth/';

const register = async (userData) => {
    const response = await axios.post(API_URL + 'register', userData);
    return response.data;
};

const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData);
    return response.data;
};

const getCurrentUser = async() => {
    const token = localStorage.getItem('token');
    if(token){
        const response = await axios.get(API_URL + 'profile', {
            headers: {
                'x-auth-token': token
            },
        });
        return response.data;
    }
    return null;
};

export default {
    register,
    login,
    getCurrentUser,
};