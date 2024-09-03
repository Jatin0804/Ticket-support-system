import React, { createContext, useState } from "react";
import ticketService from "../services/ticketService";

export const TicketContext = createContext();


export const TicketProvider = ({ children }) => {
    const [tickets, setTickets] = useState([]);

    const loadTickets = async () => {
        const fetchedTickets = await ticketService.getTickets();
        setTickets(fetchedTickets);
    };

    return(
        <TicketContext.Provider value = {{ tickets, setTickets, loadTickets }}>
            { children }
        </TicketContext.Provider>
    )
}