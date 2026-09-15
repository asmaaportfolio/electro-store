
import React, { useState } from 'react';
import './Products.css';
import Image from './assets/Image.png';
import products from '../components/productsData';

const Products = ({ setCartItems }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('electroStoreCart')) || [];

    const existingProduct = cart.find(item => item.image === product.image);

    let updatedCart;

    if (existingProduct) {
      updatedCart = cart.map(item =>
        item.image === product.image
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    localStorage.setItem('electroStoreCart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <section className="products">
      <div className="products-top">
        <div className="products-info">
          <h2>Our Electronics Store</h2>
          <p>Your one-stop shop for the latest <br /> electronics and gadgets. Discover <br />a variety of high-quality </p>
          <button className="btn-primary">Shop Now</button>
          <button className="btn-secondary">Learn More</button>
        </div>

        <div className="products-image">
          <img src={Image} alt="Electronics" />
        </div>
      </div>

      <ul className="category-list">
        <li onClick={() => handleCategoryClick('All')}>All</li>
        <li onClick={() => handleCategoryClick('Computers')}>Computers</li>
        <li onClick={() => handleCategoryClick('Touch Watches')}>Watches</li>
        <li onClick={() => handleCategoryClick('Laptops')}>Laptops</li>
        <li onClick={() => handleCategoryClick('Cameras')}>Cameras</li>
        <li onClick={() => handleCategoryClick('TV Screens')}>TV Screens</li>
        <li onClick={() => handleCategoryClick('Mobiles')}>Mobiles</li>
      </ul>

      <div className="product-grid">
        {filteredProducts.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={`Product ${index + 1}`} />
            <span className="price">$299.99</span>
            <button className="buy-now" onClick={() => addToCart(product)}>
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;

