import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    const { name, details, img, id } = product;
    return (
        <Col>
            <Card className='card p-3'>
                <Card.Img variant="top" className='card-img img-fluid' src={img} />
                <Card.Body>
                    <Card.Title className='text-primary text-opacity-75'>{name}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                </Card.Body>
                <Link to={`/details/${id}`}>
                    <button button className='w-50 mx-auto details-button'>Details of {name}</button>
                </Link>
            </Card>
        </Col >
    );
};

export default Product;