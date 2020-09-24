import React from 'react';

const ProductLine = (props) => {
  return (
    <tr id={props.id}>
      <td className='delete' onClick={props.onDelete}>
        Delete
      </td>
      <td className='save' onClick={props.onSave}>
        {props.addSaveText}
      </td>
      <td className='title'>
        <textarea
          type='text'
          name='title'
          placeholder='Title'
          value={props.title}
          onClick={props.onClick}
          onChange={props.onChange}
        ></textarea>
      </td>
      <td>
        <textarea
          type='text'
          name='description'
          placeholder='Description'
          value={props.description}
          onClick={props.onClick}
          onChange={props.onChange}
        ></textarea>
      </td>
      <td>
        <textarea
          type='text'
          name='price'
          placeholder='Price'
          value={props.price}
          onClick={props.onClick}
          onChange={props.onChange}
        ></textarea>
      </td>
      <td>
        <textarea
          type='text'
          name='quantity'
          placeholder='Quantity'
          value={props.quantity}
          onClick={props.onClick}
          onChange={props.onChange}
        ></textarea>
      </td>
      <td>
        <textarea
          type='text'
          name='imageURL'
          placeholder='image URL'
          value={props.imageURL}
          onClick={props.onClick}
          onChange={props.onChange}
        ></textarea>
      </td>
      <td>
        <img src={props.imageURL} alt='' />
      </td>
    </tr>
  );
};

export default ProductLine;
