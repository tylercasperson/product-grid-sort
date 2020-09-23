import React, { useContext, useEffect } from 'react';
import ProductContext from '../context/product/productContext';

const ReadProductGrid = (props) => {
  const productContext = useContext(ProductContext);

  const {
    products,
    getProducts,
    // getSortedProducts,
    // getSpecificProduct,
    // createProduct,
    // updateProduct,
    // deleteProduct,
  } = productContext;

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  return (
    <tbody>
      {products.map((product) => (
        <tr key={product.id}>
          <td className='edit' onClick={props.edit}>
            Edit
          </td>
          <td className='title'>{product.title}</td>
          <td>{product.description}</td>
          <td>{product.price}</td>
          <td>{product.quantity}</td>
          <td>{product.imageURL}</td>
          <td>
            <img src={product.imageURL} alt='' />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default ReadProductGrid;
