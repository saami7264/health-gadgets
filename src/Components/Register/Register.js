import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Register.css'

const Register = () => {
    const { registerUser, user } = useAuth()

    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [name, setName] = useState('')
    let email = '';
    let password = '';

    const getEmail = e => {
        email = e.target.value
    }

    const getPassword = e => {
        password = e.target.value
    }




    return (
        <div>
            <h1 className='text-primary text-uppercase text-opacity-75 my-5'><i class="fas fa-heartbeat"></i> Register As A Health Tech Enthusiast <i class="fas fa-heartbeat"></i></h1>

            <form className='mb-5' onSubmit={() => registerUser(email, password)}>
                <div>
                    <input className='input-field' type="text" name="name" id="name" placeholder='Name' />
                </div>
                <br /><br />
                <div>
                    <input onChange={getEmail} className='input-field' type="email" placeholder='Email' required />
                </div>
                <br /><br />
                <div>
                    <input onChange={getPassword} className='input-field' type="password" placeholder='Password' required />
                </div>
                <br /><br />
                <input className='submit-btn' type="submit" value="Register" />
            </form>
            <br />
            <h3 className='mb-5'>Already A Registered Enthusiast? <Link to='/login'>Log In</Link></h3>
            <br />
            {
                user && <h2>Welcome</h2>
            }
        </div>
    );
};

export default Register;