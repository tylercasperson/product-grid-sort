import React from 'react';
import Card from 'react-bootstrap/Card';

const ProductCard = (props) => {
  return (
    <Card className='productCard'>
      <Card.Img variant='top' src={props.imgSrc} />
      <Card.Body>
        <Card.Title>
          <h2 className='title'>{props.title}</h2>
        </Card.Title>
        <div className='cardText'>
          <p className='description'>{props.description}</p>
          <h5 className='price'>{props.price}</h5>
          <h5 className='quantity'>{props.quantity}</h5>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
