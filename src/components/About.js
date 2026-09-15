import React from 'react';
import './About.css'; 
import about from './assets/about.png';
import teamPhoto from './assets/teamPhoto.jpg'; // تأكد من إضافة الصورة المناسبة
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa'; // استيراد أيقونات التواصل الاجتماعي

const About = () => {
  return (
    <div>
     
      <div className="about-container">
        <div className="about-content">
          <h1>Shop Now</h1>
          <p className="about-description"> {/* إضافة فئة CSS جديدة لتقليل عرض الفقرة */}
            Welcome to our page! We are <br /> dedicated to providing the best <br/> products 
            and services to our <br/> customers.
          </p>
          <button className="read-more-button">Read More</button>
        </div>
        <div className="about-image">
          <img src={about} alt="About Us" />
        </div>
      </div>

      
      <div className="about-section">
        <h2>About Us</h2>
        <p>
          We are a team of passionate individuals committed to delivering the best shopping experience. 
          Our values are rooted in quality, service, and customer satisfaction.
        </p>
        
        
        <div className="statistics">
          <div className="stat">
            <h3>10+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="stat">
            <h3>1000+</h3>
            <p>Satisfied Customers</p>
          </div>
          <div className="stat">
            <h3>50+</h3>
            <p>Products Offered</p>
          </div>
          <div className="stat">
            <h3>20+</h3>
            <p>Team Members</p> 
          </div>
        </div>
        
        <div className="testimonials">
          <h3>What Our Customers Say</h3>
          <blockquote>
            "This is the best shopping site I've ever used!" - Happy Customer
          </blockquote>
        </div>
        
        <div className="team-photo">
          <img src={teamPhoto} alt="Our Team" />
        </div>
        
        
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={30} /></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={30} /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} /></a>
          <a href="https://wa.me" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={30} /></a>
        </div>
      </div>
    </div>
  );
};

export default About;


