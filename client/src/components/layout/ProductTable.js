import React, { useContext, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ProductContext from '../../context/product/productContext';
import ProductData from './ProductData';
import ProductLine from './ProductLine';

const ProductTable = () => {
  const productContext = useContext(ProductContext);

  const {
    products,
    getProducts,
    getSortedProducts,
    addProduct,
    resetData,
    clearCurrent,
  } = productContext;

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  const [tableSort, setTableSort] = useState({
    column: 'id',
    sort: 'ASC',
  });
  const [lineItem, setLineItem] = useState({
    id: '',
    title: '',
    description: '',
    price: 0,
    quantity: 0,
    imageURL: '',
  });

  const onChange = (e) => {
    setLineItem({ ...lineItem, [e.target.name]: e.target.value });
  };

  const addItem = (lineItem) => {
    const { title, description, price, quantity, imageURL } = lineItem;

    if (
      title !== '' ||
      description !== '' ||
      price !== 0 ||
      quantity !== 0 ||
      imageURL !== ''
    ) {
      addProduct(lineItem);
      getSortedProducts(tableSort.column, tableSort.sort);
      clearLine();
    }
  };

  const clearLine = () => {
    clearCurrent();
    setLineItem({
      id: '',
      title: '',
      description: '',
      price: 0,
      quantity: 0,
      imageURL: '',
    });
    const textarea = document.getElementById('newLine').childNodes;
    textarea[2].childNodes[0].value = null;
    textarea[3].childNodes[0].value = null;
    textarea[4].childNodes[0].value = null;
    textarea[5].childNodes[0].value = null;
    textarea[6].childNodes[0].value = null;
    textarea[7].childNodes[0].value = null;
  };

  const sort = (column) => {
    const iconChange = document.getElementById(column + 'Icon').classList;
    setTableSort({ column: column, sort: iconChange[2] });

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
      <Button variant='primary' size='lg' block onClick={() => resetData()}>
        Reset to original data
      </Button>

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
        <tbody>
          <ProductData productListing={products} />
          <ProductLine
            onDelete={() => clearLine()}
            addSaveText='Add'
            onSave={() => addItem(lineItem)}
            onChange={onChange}
          />
        </tbody>
      </Table>
    </div>
  );
};

export default ProductTable;
