import React from 'react';
import { useParams } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';
import './ProductDetails.css'

const ProductDetails = () => {

    const [products] = useProducts();
    const { productId } = useParams()
    const uniqueId = parseFloat(productId)
    return (
        <div>
            {
                products.map(product => {
                    if (product.id === uniqueId) {
                        return (
                            <div className='container'>
                                <hr className='my-5' />
                                <img className='description-img img-fluid' src={product.img} alt="" />
                                <h1 className='text-primary text-uppercase text-opacity-75 my-5'><i class="fas fa-heartbeat"></i> {product.name} <i class="fas fa-heartbeat"></i></h1>
                                <p className='description'>{product.description}</p>
                            </div>
                        )
                    }
                    else {
                        return (
                            ''
                        )
                    }
                })
            }
        </div>
    );
};

export default ProductDetails;