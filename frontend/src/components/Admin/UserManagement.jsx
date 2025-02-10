import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext"

const UserManagement = () => {
    const { users, loadUsers } = useContext(AuthContext);

    useEffect(() => {
        loadUsers();
    }, []);

    return (
        <div>
            <h2>Manage Users</h2>
            <ul>
                {users.map((user) => (
                <li key={user._id}>
                    {user.name} ({user.email})
                </li>
                ))}
            </ul>
        </div>
    );
};

export default UserManagement;