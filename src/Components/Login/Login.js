import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle, user } = useAuth()
    return (
        <div>
            {user?.email ? <Link to='/home'><button className='btn-warning m-5 p-2 text-xl-center'>Click To Return To Home</button></Link> :
                <div>
                    <h1 className='text-primary text-uppercase text-opacity-75 my-5'><i class="fas fa-heartbeat"></i> Log In To Your Account <i class="fas fa-heartbeat"></i></h1>
                    <form className='mb-5'>
                        <input className='input-field' type="email" name="" id="" required placeholder='Email' />
                        <br /><br />
                        <input className='input-field' type="password" name="" id="" required placeholder='Password' />
                        <br /><br />
                        <input className='submit-btn' type="submit" value="Log In" />
                    </form>
                    <h3 className='mb-5'>New To Health Gadgets? <Link to='/register'>Register As Enthusiast</Link></h3>
                    <h3>Or,</h3>
                    <button onClick={signInUsingGoogle} className='mb-5 google-btn'>Log In With Google</button>
                </div>}
        </div>
    );
};

export default Login;