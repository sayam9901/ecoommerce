import React from 'react';
import "./navbar.css"

const Navbar = ({toggleCart}) => {
  // const removeItemFromCart = (indexToRemove) => {
  //   const updatedCart = cartElements.filter((_, index) => index !== indexToRemove);
  //   // Update your state or cartElements array with the updatedCart
  // };
  return (
    <>
    <header>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/store">Store</a></li>
        <li><a href="/about">About</a></li>
      </ul>
      <button onClick={toggleCart}>Cart</button>
    </nav>
  </header>
  </>
  )
}

export default Navbar