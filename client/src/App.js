import React from 'react';
import './App.css';

import ProductState from './context/product/ProductState';
import Products from './pages/Products';

function App() {
  return (
    <div className='App'>
      <ProductState>
        <Products />
      </ProductState>
    </div>
  );
}

export default App;
