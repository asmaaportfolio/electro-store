import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Hero.css';

const Hero = () => {

  const sliderImages = [
    require('./assets/image1.png'),
    require('./assets/image2.png'),
    require('./assets/image3.png'),
    require('./assets/image4.png'),
    require('./assets/image5.png'),
    require('./assets/image6.png'),
  ];

  const featuredImages = [
    require('./assets/featured1.png'),
    require('./assets/featured2.png'),
    require('./assets/featured3.png'),
    require('./assets/featured4.png'),
    require('./assets/featured5.png'),
    require('./assets/featured6.png'),
  ];

  
  const popularProducts = [
    { id: 1, image: require('./assets/product1.png'), name: 'Product 1' },
    { id: 2, image: require('./assets/product2.png'), name: 'Product 2' },
    { id: 3, image: require('./assets/product3.png'), name: 'Product 3' },
    { id: 4, image: require('./assets/product4.png'), name: 'Product 4' },
    { id: 5, image: require('./assets/product5.png'), name: 'Product 5' },
    { id: 6, image: require('./assets/product6.png'), name: 'Product 6' },
  ];

  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <div className="shop-slider">
        {/* قسم السلايدر */}
        <div className="slider-content">
          <h1>Welcome to <br/> Our Shop</h1>
          <p>50% Discount on All Products</p>
          <div className="buttons">
            <button>Shop Now</button>
            <button>More Offers</button>
          </div>
        </div>
        <div className="slider-images">
          <Slider {...settings}>
            {sliderImages.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="featured-section">
        {featuredImages.map((image, index) => (
          <div className="featured-item" key={index}>
            <img src={image} alt={`Featured ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="popular-products">
        <h2>Popular Products</h2>
        <div className="product-cards">
          {popularProducts.map(product => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <h3>{product.name}</h3>
                <div className="icon-container">
                  <span className="icon eye-icon">👁️</span>
                  <span className="icon like-icon">❤️</span>
                  <span className="icon cart-icon">🛒</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero

