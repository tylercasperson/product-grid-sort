import React from 'react';

const ProductCard = (props) => {
  return (
    <div className='card'>
      <div className='header'>
        <img src={props.imgSrc} alt={props.alt} />
        <h2>{props.title}</h2>
      </div>
      <div className='content'>
        <p>{props.description}</p>
        <h3>{props.price}</h3>
        <h3>{props.quantity}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
