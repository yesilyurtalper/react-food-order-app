import React from 'react';

const AppContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  cartIsShown: false,
  setCartIsShown: (status) => {}
});

export default AppContext;