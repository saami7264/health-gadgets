import React from 'react';
import useAuth from '../../Hooks/useAuth';
import './UserProfile.css'

const UserProfile = () => {

    const { user } = useAuth();

    return (
        <div className='m-5'>
            <img className='img-fluid user-img' src={user?.photoURL} alt="" />
            <h3 className='my-3 text-primary'>Name: {user?.displayName}</h3>
            <h5 className='my-3 text-primary'>Email: {user?.email}</h5>
        </div>
    );
};

export default UserProfile;