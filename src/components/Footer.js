import React from 'react';
import './Footer.css'; // تأكد من أن لديك ملف CSS المناسب

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
      
        <div className="newsletter">
         
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      
      <div className="footer-links">
        <a href="#terms">Terms of Service</a>
        <a href="#privacy">Privacy Policy</a>
        <a href="#contact">Contact Us</a>
      </div>
      
      <div className="footer-bottom">
        <p>© 2025 Asmaa Gandil. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;




