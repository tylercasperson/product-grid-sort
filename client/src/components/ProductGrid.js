import React, { useContext, useState } from 'react';
import Table from 'react-bootstrap/Table';
import ProductContext from '../context/product/productContext';
import ReadProductGrid from './ReadProductGrid';

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

  //   useEffect(() => {
  //     getProducts();
  //     // eslint-disable-next-line
  //   }, []);

  const clickEdit = () => {
    getSortedProducts('title', 'ASC');
  };

  const [icon, setIcon] = useState(<i className='sort fas fa-sort'></i>);
  const [tableBody, setTableBody] = useState(
    <ReadProductGrid edit={clickEdit} />
  );

  const onClick = (column) => {
    console.log(column);
    // console.log(ref.toString());

    switch (column) {
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

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th className='header' onClick={() => onClick('title')}>
              Title {icon}
            </th>
            <th className='header' onClick={() => onClick('description')}>
              Description {icon}
            </th>
            <th className='header' onClick={() => onClick('price')}>
              Price {icon}
            </th>
            <th className='header' onClick={() => onClick('quantity')}>
              Quantiity {icon}
            </th>
            <th className='header' onClick={() => onClick('imageURL')}>
              Image {icon}
            </th>
            <th></th>
          </tr>
        </thead>
        {tableBody}
      </Table>
    </div>
  );
};

export default ProductGrid;
