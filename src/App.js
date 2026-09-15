
import React, { useState } from 'react';
import './components/App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Shop from './components/Shop';
import About from './components/About';
import Products from './components/Products';
import LoginUp from './components/LoginUp';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Footer from './components/Footer';

const AppContent = () => {
  const location = useLocation();

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('electroStoreCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  return (
    <div>
     <Navbar cartCount={cartItems.length} />

      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/About" element={<About />} />
        <Route path="/Products" element={<Products setCartItems={setCartItems} />} />
        <Route path="/loginUp" element={<LoginUp />} />
        <Route path="/Contact" element={<Contact />} />
      <Route
  path="/Cart"
  element={
    <Cart
      cartItems={cartItems}
      setCartItems={setCartItems}
    />
  }
/>
      </Routes>

      {location.pathname !== "/loginUp" && location.pathname !== "/Cart" && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;

