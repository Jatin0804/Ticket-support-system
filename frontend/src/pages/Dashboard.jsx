import React from 'react';
import SubmitTicket from '../components/Tickets/SubmitTicket';
import TicketList from '../components/Tickets/TicketList';

const Dashboard = () => (
  <div>
    <h1>Dashboard</h1>
    <SubmitTicket />
    <TicketList />
  </div>
);

export default Dashboard;
