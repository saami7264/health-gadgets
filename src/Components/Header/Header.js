import React from 'react';
import { Carousel, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth()
    console.log(user);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to="/home">Health Gadgets</Navbar.Brand>
                    <Navbar.Collapse className="justify-content-start">

                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/user">User Profile</Nav.Link>
                            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                            {
                                user?.email ? <button onClick={logOut} className='me-5 border-3 rounded-3 btn-warning'>Log Out</button> :

                                    <div>
                                        <Nav.Link className='d-inline-block' as={Link} to="/login">Login</Nav.Link>
                                        <Nav.Link className='d-inline-block' as={Link} to="/register">Register</Nav.Link>
                                    </div>
                            }
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img height='1000px'
                            className="d-block w-100"
                            src="https://i.ibb.co/gdYqVtB/b-1.png"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className='text-black'>Fitbit Versa 2</h3>
                            <p className='text-black'>The new $199.99 Versa 2, which hits stores on September 15th, is the company’s latest smartwatch effort.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img height='1000px'
                            className="d-block w-100"
                            src="https://m.media-amazon.com/images/S/aplus-media/sc/6c182a79-6931-41b1-9392-a1fa4a74d5ff.__CR0,0,970,600_PT0_SX970_V1___.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Verilux Cleanwave</h3>
                            <p>A modern and important device in today's pandemic ridden world. Kill All the Viruses</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img height='1000px'
                            className="d-block w-100"
                            src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/2N7CAUO3ERIGVLFO5Q37PEG334.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Apple Watch</h3>
                            <p>Your Apple Watch can help you meet your sleep goals, track important information related to your heart, check your blood oxygen levels, and encourage you to wash your hands.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

        </div>
    );
};

export default Header;