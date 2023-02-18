import { useContext } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import AppContext from './store/AppContext';
import React from 'react';


function App() {

  const ctx = useContext(AppContext);//asdf

  return (
    <React.Fragment>
      {ctx.cartIsShown && <Cart onClose={() => {ctx.setCartIsShown(false);}} />}
      <Header onShowCart={() => {ctx.setCartIsShown(true);}} />
      <main>
        <Meals />
      </main>
    </React.Fragment> 
  );
}

export default App;
