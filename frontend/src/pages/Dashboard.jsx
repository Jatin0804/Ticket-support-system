import React, { useContext, useEffect } from 'react';
import SubmitTicket from '../components/Tickets/SubmitTicket';
import TicketList from '../components/Tickets/TicketList';
import { TicketContext } from '../context/TicketContext';


const Dashboard = () => {
  // const { loadUserTickets } = useContext(TicketContext);

  // useEffect(() => {
  //   loadUserTickets();
  // }, []);

  return (
    <div>
    <h1>Dashboard</h1>
    <SubmitTicket />
    <TicketList />
  </div>
  );
  
};

export default Dashboard;
