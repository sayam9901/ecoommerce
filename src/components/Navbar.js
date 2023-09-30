import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <header>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/store">Store</a></li>
        <li><a href="/about">About</a></li>
      </ul>
      <button>Cart</button>
    </nav>
  </header>
  )
}

export default Navbar