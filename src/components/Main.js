import React from 'react'
import "./main.css"
const productsArr = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]
const Main = ({AddCart}) => {
  return (
    <>
    {productsArr.map((product)=>(
        <main>
        <section className="product">
          <img src={product.imageUrl} alt="Product 1" />
          <h2>{product.title}</h2>
          <p>{product.price}</p>
          <button onClick={()=>AddCart(1,product.title , product.price , product.imageUrl)}>Add to Cart</button>
        </section>
        </main>
    ))}
  </>
  )
}

export default Main