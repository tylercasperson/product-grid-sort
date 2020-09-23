import React, { useContext, useEffect, useRef, useState } from 'react';
import Table from 'react-bootstrap/Table';
import ProductContext from '../context/product/productContext';

const ProductGrid = (props) => {
  const productContext = useContext(ProductContext);

  const {
    products,
    getProducts,
    getSortedProducts,
    // getSpecificProduct,
    // createProduct,
    // updateProduct,
    // deleteProduct,
  } = productContext;

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  const title = useRef('');
  const description = useRef('');
  const price = useRef();
  const quantity = useRef();
  const imageURL = useRef();

  const [icon, setIcon] = useState(<i className='sort fas fa-sort'></i>);
  const [descriptionIcon, setDescriptionIcon] = useState(
    <i className='sort fas fa-sort'></i>
  );
  const [priceIcon, setPriceIcon] = useState(
    <i className='sort fas fa-sort'></i>
  );
  const [quantityIcon, setQuantityIcon] = useState(
    <i className='sort fas fa-sort'></i>
  );
  const [imageIcon, setImageIcon] = useState(
    <i className='sort fas fa-sort'></i>
  );

  const onClick = (column, ref) => {
    console.log(column);
    // console.log(ref.toString());

    console.log(ref.current.children[0].classList[0]);
    switch (ref.current.children[0].classList[0]) {
      case 'sort':
        setIcon(<i className='asc fas fa-sort-up'></i>);
        getSortedProducts(column, 'ASC');
        break;
      case 'asc':
        setIcon(<i className='desc fas fa-sort-down'></i>);
        getSortedProducts(column, 'DESC');
        break;
      default:
        setIcon(<i className='sort fas fa-sort'></i>);
        getSortedProducts('id', 'ASC');
    }

    console.log(products);
  };

  const edit = () => {
    getSortedProducts('title', 'ASC');
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th
              ref={title}
              className='header'
              onClick={() => onClick('title', title)}
            >
              Title {icon}
            </th>
            <th
              ref={description}
              className='header'
              onClick={() => onClick('description', description)}
            >
              Description {descriptionIcon}
            </th>
            <th
              ref={price}
              className='header'
              onClick={() => onClick('price', price)}
            >
              Price {priceIcon}
            </th>
            <th
              ref={quantity}
              className='header'
              onClick={() => onClick('quantity', quantity)}
            >
              Quantiity {quantityIcon}
            </th>
            <th
              ref={imageURL}
              className='header'
              onClick={() => onClick('imageURL', imageURL)}
            >
              Image {imageIcon}
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className='edit' onClick={edit}>
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
      </Table>
    </div>
  );
};

export default ProductGrid;
