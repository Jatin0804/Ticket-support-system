import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { NotificationContext } from "../../context/NotificationContext";

const Profile = () => {
    const {user, setUser} = useContext(AuthContext);
    const { addNotification } = useContext(NotificationContext);
    const [ name, setName ] = useState(user?.name || '');
    const [ email, setEmail ] = useState(user?.email || '');

    const handleUpdateProfile = async(e) => {
        e.preventDefault();

        const updateUser = await updateProfile({ name, email });

        if (updateUser){
            setUser(updateUser);
            addNotification('Profile Updated successfully.');
        }
    };

    return (
        <div>
            <h2>
                Update Profile
            </h2>
            <form onSubmit={handleUpdateProfile}>
                <div>
                <label>Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                </div>
                <div>
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </div>
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
};

export default Profile;