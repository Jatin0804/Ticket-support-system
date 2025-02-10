import React, { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";

const Notification = () => {
    const { notifications } = useContext(NotificationContext);

    return (
        <div>
            {notifications.map((notification, index) => (
                <div key={index} className="notification">
                    {notification}
                </div>    
            ))}
        </div>
    );
};

export default Notification;
