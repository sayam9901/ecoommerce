import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
// import Cart from './components/Cart';
import CartItem from './components/CartItem';



function App() {
  const [cartVisible, setCartVisible] = useState(false);
  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };
  return (
    <div className="App">
   <Navbar toggleCart={toggleCart}/>
      {cartVisible &&  <CartItem onCloseCart={toggleCart}/>}
     
   <Main/>
    </div>
  );
}

export default App;
