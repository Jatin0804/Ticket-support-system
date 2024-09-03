import React, { useState, useContext } from "react";
import ticketService from "../../services/ticketService";
import { TicketContext } from "../../context/TicketContext";

const submitTicket = () => {
    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ category, setCategory ] = useState('');
    const { loadTickets } = useContext(TicketContext);

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await ticketService.submitTicket({
                title, description, category
            });
            loadTickets();
        } catch (err) {
            console.error("Ticket submission failed", err)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea 
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />

            <button type="submit">
                Submit Ticket
            </button>
        </form>
    )

}

export default submitTicket;