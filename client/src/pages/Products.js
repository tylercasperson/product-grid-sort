import React, { useContext, useEffect } from 'react';
import ProductContext from '../context/product/productContext';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const productContext = useContext(ProductContext);

  const {
    products,
    getProducts,
    // getSpecificProduct,
    // createProduct,
    // updateProduct,
    // deleteProduct,
  } = productContext;

  // const { imgSrc } = products;

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  console.log(products);

  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          imgSrc={product.imageURL}
          alt={product.alt}
          title={product.title}
          description={product.description}
          price={product.price}
          quantity={product.quantity}
        />
      ))}
    </div>
  );
};

export default Products;
