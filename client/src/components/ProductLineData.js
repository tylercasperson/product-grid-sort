import React, { useContext, useEffect } from 'react';
import ProductContext from '../context/product/productContext';
import ProductLine from './ProductLine';

const ProductLineData = (props) => {
  const productContext = useContext(ProductContext);

  const { products, getProducts, deleteProduct } = productContext;

  useEffect(() => {
    getProducts();
    deleteProduct();
    // eslint-disable-next-line
  }, []);

  const onSave = () => {
    // if (lineItem === null) {
    //   addProduct(lineItem);
    // } else {
    //   updateProduct(lineItem);
    // }
  };

  const onDelete = (id) => {
    deleteProduct(id);
  };

  return (
    <>
      {products.map((product) => (
        <ProductLine
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          quantity={product.quantity}
          imageURL={product.imageURL}
          onDelete={() => onDelete(product.id)}
          onSave={() => onSave()}
        />
      ))}
    </>
  );
};

export default ProductLineData;
