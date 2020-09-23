import React, { useContext, useState } from 'react';
import Table from 'react-bootstrap/Table';
import ProductContext from '../context/product/productContext';
import ReadProductGrid from './ReadProductGrid';
import ProductLineData from './ProductLineData';
import ProductLine from './ProductLine';

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

  const [tableBody, setTableBody] = useState(
    <ReadProductGrid edit={clickEdit} />
  );

  const sort = (column) => {
    const iconChange = document.getElementById(column + 'Icon').classList;

    switch (iconChange[2]) {
      case 'sort':
        iconChange.remove('sort');
        iconChange.remove('fa-sort');
        iconChange.add('fa-sort-up');
        iconChange.add('asc');
        getSortedProducts(column, 'ASC');
        break;
      case 'asc':
        iconChange.remove('asc');
        iconChange.remove('fa-sort-up');
        iconChange.add('fa-sort-down');
        iconChange.add('desc');
        getSortedProducts(column, 'DESC');
        break;
      default:
        iconChange.remove('fa-sort-down');
        iconChange.remove('desc');
        iconChange.add('fa-sort');
        iconChange.add('sort');
        getSortedProducts('id', 'ASC');
    }
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th
              id='titleHeader'
              className='header'
              onClick={() => sort('title')}
            >
              Title <i id='titleIcon' className='fas fa-sort sort'></i>
            </th>
            <th
              id='descriptionHeader'
              className='header'
              onClick={() => sort('description')}
            >
              Description{' '}
              <i id='descriptionIcon' className='fas fa-sort sort'></i>
            </th>
            <th
              id='priceHeader'
              className='header'
              onClick={() => sort('price')}
            >
              Price <i id='priceIcon' className='fas fa-sort sort'></i>
            </th>
            <th
              id='quantityHeader'
              className='header'
              onClick={() => sort('quantity')}
            >
              Quantiity <i id='quantityIcon' className='fas fa-sort sort'></i>
            </th>
            <th
              id='imageHeader'
              className='header'
              onClick={() => sort('imageURL')}
            >
              Image <i id='imageIcon' className='fas fa-sort sort'></i>
            </th>
            <th></th>
          </tr>
        </thead>

        <ProductLineData />
        <ProductLine />
      </Table>
    </div>
  );
};

export default ProductGrid;
