import React, { useContext, useEffect } from 'react';
import ProductContext from '../context/product/productContext';
import ProductLine from './ProductLine';

const ProductLineData = (props) => {
  const productContext = useContext(ProductContext);

  const { products, getProducts } = productContext;

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  return (
    <tbody>
      {products.map((product) => (
        <ProductLine
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          quantity={product.quantity}
          imageURL={product.imageURL}
        />
      ))}
    </tbody>
  );
};

export default ProductLineData;
