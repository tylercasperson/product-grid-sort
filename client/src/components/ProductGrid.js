import React, { useContext, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import ProductContext from '../context/product/productContext';
import ProductLine from './ProductLine';

const ProductGrid = () => {
  const productContext = useContext(ProductContext);

  const {
    products,
    current,
    getProducts,
    getSortedProducts,
    deleteProduct,
    addProduct,
    updateProduct,
    // setCurrent,
  } = productContext;

  useEffect(() => {
    getProducts();
  }, [productContext, getProducts, current]);

  const [lineItem, setLineItem] = useState({
    id: '',
    title: '',
    description: '',
    price: '',
    quantity: '',
    imageURL: '',
  });

  const { title, description, price, quantity, imageURL } = lineItem;

  const onClick = (productLine) => {
    setLineItem(productLine);
    console.log(lineItem);
  };

  const onChange = (e) => {
    setLineItem({ ...lineItem, [e.target.name]: e.target.value });
  };

  const onSave = (key) => {
    if (key === null) {
      addProduct(lineItem);
      //   getProducts();
      //   window.location.reload();
    } else {
      updateProduct(lineItem);
    }
  };

  const clearLine = () => {
    setLineItem({
      id: '',
      title: '',
      description: '',
      price: '',
      quantity: '',
      imageURL: '',
    });
    // window.location.reload();
  };

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
        <tbody>
          {products.map((product) => (
            <ProductLine
              key={product.id}
              title={lineItem.id === product.id ? title : product.title}
              description={
                lineItem.id === product.id ? description : product.description
              }
              price={lineItem.id === product.id ? price : product.price}
              quantity={
                lineItem.id === product.id ? quantity : product.quantity
              }
              imageURL={
                lineItem.id === product.id ? imageURL : product.imageURL
              }
              onDelete={() => deleteProduct(product.id)}
              addSaveText='Save'
              onSave={() => onSave(lineItem)}
              onChange={onChange}
              onClick={() => onClick(product, product.id)}
            />
          ))}
          <ProductLine
            title={lineItem.id === null ? title : ''}
            description={lineItem.id === null ? description : ''}
            price={lineItem.id === null ? price : ''}
            quantity={lineItem.id === null ? quantity : ''}
            imageURL={lineItem.id === null ? imageURL : ''}
            onDelete={() => clearLine()}
            addSaveText='Add'
            onSave={() => onSave(null)}
            onChange={onChange}
            onClick={() =>
              onClick({
                id: '',
                title: '',
                description: '',
                price: '',
                quantity: '',
                imageURL: '',
              })
            }
          />
        </tbody>
      </Table>
    </div>
  );
};

export default ProductGrid;
