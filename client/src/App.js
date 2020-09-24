import React from 'react';
import './App.css';

import ProductState from './context/product/ProductState';
import ProductTable from './components/layout/ProductTable';

function App() {
  return (
    <div className='App'>
      <ProductState>
        <ProductTable />
      </ProductState>
    </div>
  );
}

export default App;
