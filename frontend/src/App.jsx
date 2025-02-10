import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { TicketProvider } from './context/TicketContext';
import { NotificationProvider } from './context/NotificationContext';

import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Profile from './components/Profile/Profile';

import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

import PrivateRoute from './components/PrivateRoute'; 

import './styles.css';

const App = () => {
  return (
    <AuthProvider>
      <TicketProvider>
        <NotificationProvider>
          <Router>
            <Routes>
              
              <Route path="/" element = {<Home />}/>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              } />
              <Route path="/admin" element={
                <PrivateRoute>
                  <AdminDashboard />
                </PrivateRoute>
              } />
              <Route path="/profile" element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              } />
              <Route path="*" element={<NotFound />} />
            
            </Routes>
          </Router>
        </NotificationProvider>
      </TicketProvider>
    </AuthProvider>
  );
};

// function App() {
//   return (
//     <div>
//       <h1>
//         "Hi there"
//       </h1>
//     </div>
//     // <h1>Hi there</h1>
//   );
// };

export default App;