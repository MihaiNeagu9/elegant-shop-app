import { useState } from 'react';

import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import Product from './components/Product.jsx'
import { DUMMY_PRODUCTS } from './dummy-products.js';
import CartContextProvier from './store/shopping-cart-context.jsx';

function App() {
  return (
    <CartContextProvier>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContextProvier>
  );
}

export default App;
