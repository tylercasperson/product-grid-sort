import React, { useContext, useState } from 'react';
import ProductContext from '../context/product/productContext';

const ProductLine = (props) => {
  const productContext = useContext(ProductContext);

  const { addProduct, updateProduct, deleteProduct } = productContext;

  const [lineItem, setLineItem] = useState({
    title: '',
    description: '',
    price: '',
    quantity: '',
    imageURL: '',
  });

  const onChange = (e) => {
    setLineItem({ ...lineItem, [e.target.name]: e.target.value });
  };

  return (
    <tr>
      <td className='delete' onClick={props.onDelete}>
        Delete
      </td>
      <td className='save' onClick={props.onSave}>
        Save
      </td>
      <td className='title'>
        <textarea
          type='text'
          name='title'
          placeholder='Title'
          value={props.title}
          onChange={onChange}
        ></textarea>
      </td>
      <td>
        <textarea
          type='text'
          name='description'
          placeholder='Description'
          value={props.description}
          onChange={onChange}
        ></textarea>
      </td>
      <td>
        <textarea
          type='text'
          name='price'
          placeholder='Price'
          value={props.price}
          onChange={onChange}
        ></textarea>
      </td>
      <td>
        <textarea
          type='text'
          name='quantity'
          placeholder='Quantity'
          value={props.quantity}
          onChange={onChange}
        ></textarea>
      </td>
      <td>
        <textarea
          type='text'
          name='imageURL'
          placeholder='image URL'
          value={props.imageURL}
          onChange={onChange}
        ></textarea>
      </td>
      <td>
        <img src={props.imageURL} alt='' />
      </td>
    </tr>
  );
};

export default ProductLine;
