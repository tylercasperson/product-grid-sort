import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductContext from '../../context/product/productContext';
import ProductLine from './ProductLine';

const ProductData = ({ productListing }) => {
  const productContext = useContext(ProductContext);

  const {
    getProducts,
    deleteProduct,
    updateProduct,
    current,
    setCurrent,
    clearCurrent,
  } = productContext;

  const [line, setLine] = useState({
    id: 0,
    title: '',
    description: '',
    price: 0,
    quantity: 0,
    imageURL: '',
  });

  const { title, description, price, quantity, imageURL } = line;

  useEffect(() => {
    if (current !== undefined) {
      setLine(current);
    } else {
      setLine({
        id: 0,
        title: ' ',
        description: ' ',
        price: 0,
        quantity: 0,
        imageURL: ' ',
      });
    }
  }, [productContext, current]);

  const onClick = (productRow, line) => {
    if (productRow.id === line.id) {
      setCurrent(productRow);
      updateProduct(line);
      getProducts();
      clearCurrent();
    } else {
      setCurrent(productRow);
      updateProduct(line);
      getProducts();
    }
  };

  return (
    <>
      {productListing.map((productRow) => (
        <ProductLine
          key={productRow.id}
          title={line.id === productRow.id ? title : productRow.title}
          description={
            line.id === productRow.id ? description : productRow.description
          }
          price={line.id === productRow.id ? price : productRow.price}
          quantity={line.id === productRow.id ? quantity : productRow.quantity}
          imageURL={line.id === productRow.id ? imageURL : productRow.imageURL}
          onDelete={() => deleteProduct(productRow.id)}
          addSaveText='Save'
          onSave={() => onClick(productRow, line)}
          onChange={(e) =>
            setLine({
              ...line,
              [e.target.name]: e.target.value,
            })
          }
          onClick={() => onClick(productRow, line)}
        />
      ))}
    </>
  );
};

ProductData.propTypes = {
  productListing: PropTypes.array.isRequired,
};

export default ProductData;
