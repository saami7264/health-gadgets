import React from 'react'; import { Row } from 'react-bootstrap';
import useProducts from '../../Hooks/useProducts';
import Product from '../Product/Product';
import './Home.css'

const Home = () => {

    const [products] = useProducts();

    return (
        <div className='mt-5'>
            <h1 className='text-primary text-uppercase text-opacity-75 my-5'><i class="fas fa-heartbeat"></i> Modern Health Care Products <i class="fas fa-heartbeat"></i></h1>
            <Row xs={1} md={2} className="g-5 container row mx-auto" >
                {
                    products.map(product => <Product
                        product={product}
                        key={product.key}
                    ></Product>)
                }
            </Row>
            <div className='mt-5 quote p-5'>
                <h1 className='text text-uppercase text-opacity-75 my-5 mt-5'><i class="fas fa-heartbeat"></i> What The Expert Say <i class="fas fa-heartbeat"></i></h1>
                <div className='row g-5 p-5'>
                    <img className='col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4' src="https://i.ibb.co/FY6YhSC/apple-watch-1.png" alt="" />
                    <h3 className='quote-text col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 d-flex align-items-center'>Apple Watch is a revolution to the health tech industry. We believe in a future where technology will keep us healthy.
                        -Tim Cook (Apple CEO)</h3>
                    <img className='col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4' src="https://i.ibb.co/khsMxNq/apple-watch.png" alt="" />
                </div>
            </div>
            <div className='quote-2 p-5'>
                <h1 className='text text-uppercase text-opacity-75 my-5 mt-5'><i class="fas fa-heartbeat"></i> User Feedback <i class="fas fa-heartbeat"></i></h1>
                <div className='row g-5 p-5'>
                    <img className='col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4' src="https://i.ibb.co/b6KfHRS/1.png" alt="" />
                    <h3 className='quote-text col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 d-flex align-items-center'>"Equipped with stress, heart rhythm, and skin temperature scanners, the Sense might be the most ambitious device Fitbit—or any other smartwatch maker—has ever made."
                        -Macworld</h3>
                    <img className='col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4' src="https://i.ibb.co/Vp7phnw/health.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;