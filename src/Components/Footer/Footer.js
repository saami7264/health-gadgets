import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-section py-5 g-0 row'>
            <div className='col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 col-xxl-8'>
                <i class="fab fa-facebook fa-5x"></i>
                <i class="fab fa-twitter fa-5x"></i>
                <i class="fab fa-instagram fa-5x"></i>
                <i class="fab fa-youtube fa-5x"></i>
                <i class="fab fa-snapchat fa-5x"></i>
            </div>
            <div className='col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
                <h3 className='text-white'>Health Gadgets</h3>
                <h4 className='text-white'>Md Abdul Muhib Sami</h4>
                <small className='text-white'>©2021, All Rights Reserved</small>
            </div>
        </div>
    );
};

export default Footer;