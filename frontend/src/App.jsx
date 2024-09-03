import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { TicketProvider } from './context/TicketContext';

import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <AuthProvider>
      <TicketProvider>
        <Router>
          <Routes>
            <Route path="/" element = {<Home />}/>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
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