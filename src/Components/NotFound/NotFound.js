import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img className='w-100' src="https://image.freepik.com/free-vector/error-404_1217-2696.jpg" alt="" />
            <Link to='/home'><button className='btn-success p-2 m-3 rounded-3 w-25'>Return To Home</button></Link>

        </div>
    );
};

export default NotFound;