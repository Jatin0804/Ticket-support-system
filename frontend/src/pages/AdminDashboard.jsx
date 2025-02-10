import React from "react";
import TicketManagement from "../components/Admin/TicketManagement";
import UserManagement from '../components/Admin/UserManagement';

const AdminDashboard = () => (
  <div>
    <h1>Admin Dashboard</h1>
    <TicketManagement />
    <UserManagement />
  </div>
);

export default AdminDashboard;
