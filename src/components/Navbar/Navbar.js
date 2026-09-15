import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive); 
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-toggle" onClick={toggleMenu}>
        <AiOutlineMenu size={25} />
      </div>
      <ul className={`nav-menu ${menuActive ? 'active' : ''}`}>
        {['shop', 'About', 'Products', 'Contact'].map(item => (
          <li key={item} onClick={() => setMenuActive(false)}>
            <Link style={{ textDecoration: 'none' }} to={`/${item === 'shop' ? '' : item}`}>
              {item}
            </Link>
            {item === menuActive && <hr />}
          </li>
        ))}
      </ul>
      <div className="nav-login-cart">
        <Link to="/loginUp">
          <button>Login</button>
        </Link>
       
         <Link to="/Cart">
  <FaShoppingCart size={25} color="#000" className="cart-icon" />
</Link>
     <div className="nav-cart-count">{cartCount}</div>
      </div>
    </div>
  );
};

export default Navbar;











