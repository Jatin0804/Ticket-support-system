import React, { useState, createContext } from 'react';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);

    const addNotification = (message) => {
        setNotifications((prenotifications) => [...prenotifications, message]);
        setTimeout(() => {
            setNotifications((prenotifications) => prenotifications.slice(1));
        }, 3000);
    };

    return(
        <NotificationContext.Provider value ={{ notifications, addNotification }}>
            { children }
        </NotificationContext.Provider>
    )
}