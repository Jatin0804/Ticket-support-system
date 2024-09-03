import axios from "axios";

const API_URL = 'http://localhost:3000/api/tickets/';

const submitTicket = async (ticketData) => {
    const token = localStorage.getItem('token');
    const response = await axios.post(API_URL + 'submit', ticketData, {
        headers: {
            'x-auth-token': token
        },
    });
    return response.data;
};

const getTickets = async () => {
    const token = localStorage.getItem('token');
    const response = await axios.get(API_URL + 'my-tickets', {
        headers: {
            'x-auth-token': token
        },
    });
    return response.data;
};

export default {
    submitTicket,
    getTickets,
};