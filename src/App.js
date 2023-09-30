import React, { useState , useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
// import Cart from './components/Cart';
import CartItem from './components/CartItem';



function App() {
  const [cartVisible, setCartVisible] = useState(false);
 const [cartItem , setCartITem] = useState([])
  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };
  const AddCart = (quantity , title , price , imageUrl)=>{
    setCartITem([...cartItem , {quantity , title , price , imageUrl}])
  }
  return (
    <div className="App">
   <Navbar toggleCart={toggleCart}/>
      {cartVisible &&  <CartItem onCloseCart={toggleCart} cartItems= {cartItem}/>}
     
   <Main AddCart={AddCart}/>
    </div>
  );
}

export default App;
