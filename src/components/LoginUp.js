// LoginUp.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import './LoginUp.css';

const LoginUp = () => {
  return (
    <div className="login-container">
      <h3>Login</h3>
      
     
      <button className="social-login-button facebook-button">
        <FaFacebook className="social-icon" />
        Login with Facebook
      </button>

      <button className="social-login-button google-button">
        <FaGoogle className="social-icon" />
        Login with Google
      </button>

      <form className="login-form">
        <input type="text" placeholder="Username" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />
        <input type="tel" placeholder="Phone" className="login-input" />
        <button type="submit" className="login-button">Log In</button>
        <div className="login-options">
          <Link to="/forgot-password">Forgot Password?</Link>
          <Link to="/sign-up">Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginUp;



