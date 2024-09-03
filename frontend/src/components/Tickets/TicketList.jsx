import React, { useContext, useEffect } from "react";
import { TicketContext } from "../../context/TicketContext";

const TicketList = () => {
    const { tickets, loadTickets } = useContext(TicketContext);

    useEffect(() => {
        loadTickets();
    }, []);

    return (
        <div>
            <h2>
                My Tickets
            </h2>
            <ul>
                {tickets.map((ticket) => (
                    <li key={ticket._id}>
                        {ticket.title} - {ticket.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TicketList;
