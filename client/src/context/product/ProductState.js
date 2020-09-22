import React, { useReducer } from 'react';
import axios from 'axios';
import ProductContext from './productContext';
import productReducer from './productReducer';
import {
  GET_PRODUCTS,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  PRODUCT_ERROR,
} from '../types';

const ProductState = (props) => {
  const initialState = {
    products: [],
    productError: [],
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  // Get Products
  const getProducts = async () => {
    try {
      const res = await axios.get('/api/products');

      dispatch({
        type: GET_PRODUCTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: err.response,
      });
    }
  };

  // Get Specific Product
  const getSpecificProduct = async (id) => {
    try {
      const res = await axios.get(`/api/products/${id}`);

      dispatch({
        type: GET_PRODUCTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: err.response,
      });
    }
  };

  // Add Product
  const createProduct = async (product) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/products', product, config);

      dispatch({
        type: CREATE_PRODUCT,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: err,
      });
    }
  };

  // Update Product
  const updateProduct = async (product) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.put(
        `/api/products/${product.id}`,
        product,
        config
      );

      dispatch({
        type: UPDATE_PRODUCT,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: err,
      });
    }
  };

  // Delete Product
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`/api/products/${id}`);

      dispatch({
        type: DELETE_PRODUCT,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: err,
      });
    }
  };

  return (
    <ProductContext.Provider
      value={{
        product: state.product,
        productError: state.productError,
        getProducts,
        getSpecificProduct,
        deleteProduct,
        createProduct,
        updateProduct,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
