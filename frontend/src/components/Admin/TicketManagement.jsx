import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { TicketContext } from "../../context/TicketContext";
import { NotificationContext } from "../../context/NotificationContext";

const TicketManagement = () => {
    const { tickets, loadTickets, updateTicketStatus } = useContext(TicketContext);
    const { addNotification } = useContext(NotificationContext);

    const[ filter, setFilter ] = useState('All');

    useEffect(() => {
        loadTickets();
    }, []);

    const handleStatusChange = (ticketId, newStatus) => {
        updateTicketStatus(ticketId, newStatus);
        addNotification(`Ticket ${ticketId} status updated to ${newStatus}`);
    };

    const filteredTickets = tickets.filter(
        (ticket) => filter === 'All' || ticket.status === filter
    );

    return (
        <div>
            <h2>
                Manage Tickets
            </h2>
            <div>
                <label>Filter by Status: </label>
                    <select onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Open">Open</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Resolved">Resolved</option>
                    </select>
            </div>
            <ul>
                {filteredTickets.map((ticket) => (
                <li key={ticket._id}>
                    {ticket.title} - {ticket.status}
                    <button onClick={() => handleStatusChange(ticket._id, 'In Progress')}>In Progress</button>
                    <button onClick={() => handleStatusChange(ticket._id, 'Resolved')}>Resolve</button>
                </li>
                ))}
            </ul>
        </div>
    );
};

export default TicketManagement;