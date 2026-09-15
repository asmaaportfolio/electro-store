import React from 'react';
import './Contact.css'; 
import imagesCon from './assets/imagesCon.jfif'; 

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-header">
        <h2>Get in Touch</h2>
        <p>We'd love to hear from you! Reach out to us anytime.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <img src={imagesCon} alt="Contact Us" className="contact-image" />
          <ul>
            <li><strong>Email:</strong> support@ourstore.com</li>
            <li><strong>Phone:</strong> +1 234 567 890</li>
            <li><strong>Address:</strong> 123 Main St, City, Country</li>
          </ul>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

