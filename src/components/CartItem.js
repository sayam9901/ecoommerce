import React from 'react'
import "./cartitem.css"
const cartElements = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 2,
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 3,
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    }
    
    ]


const CartItem = ({onCloseCart}) => {
  return (
    <div className="cart">
    <div className="cart-header">
      <h2>Your Cart</h2>
      <button onClick={onCloseCart} className="close-cart-button">
        &times;
      </button>
    </div>
    <div className="cart-items">
      {cartElements.map((item, index) => (
        <div className="cart-item" key={index}>
          <img src={item.imageUrl} alt={item.title} />
          <div className="cart-item-details">
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button>Remove</button>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default CartItem