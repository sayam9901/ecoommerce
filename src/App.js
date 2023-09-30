import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
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

      <main>
        <section className="product">
          <img src="product1.jpg" alt="Product 1" />
          <h2>Product 1</h2>
          <p>Price: $10.99</p>
          <button>Add to Cart</button>
        </section>

        <section className="product">
          <img src="product2.jpg" alt="Product 2" />
          <h2>Product 2</h2>
          <p>Price: $15.99</p>
          <button>Add to Cart</button>
        </section>

        <section className="product">
          <img src="product3.jpg" alt="Product 3" />
          <h2>Product 3</h2>
          <p>Price: $20.99</p>
          <button>Add to Cart</button>
        </section>
      </main>
    </div>
  );
}

export default App;
