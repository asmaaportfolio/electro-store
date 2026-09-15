
import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, setCartItems }) => {
  const price = 299.99;

  const removeFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);

    setCartItems(updatedCart);
    localStorage.setItem('electroStoreCart', JSON.stringify(updatedCart));
  };

  const increaseQuantity = (index) => {
    const updatedCart = cartItems.map((item, i) =>
      i === index
        ? { ...item, quantity: (item.quantity || 1) + 1 }
        : item
    );

    setCartItems(updatedCart);
    localStorage.setItem('electroStoreCart', JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (index) => {
    const updatedCart = cartItems
      .map((item, i) =>
        i === index
          ? { ...item, quantity: (item.quantity || 1) - 1 }
          : item
      )
      .filter(item => item.quantity > 0);

    setCartItems(updatedCart);
    localStorage.setItem('electroStoreCart', JSON.stringify(updatedCart));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + price * (item.quantity || 1),
    0
  );

  return (
    <section className="cart">
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((product, index) => (
              <div className="cart-item" key={index}>
                <img
                  src={product.image}
                  alt={`Product ${index + 1}`}
                />

                <span>${price.toFixed(2)}</span>

                <div className="quantity">
                  <button onClick={() => decreaseQuantity(index)}>
                    -
                  </button>

                  <span>{product.quantity || 1}</span>

                  <button onClick={() => increaseQuantity(index)}>
                    +
                  </button>
                </div>

                <button onClick={() => removeFromCart(index)}>
                  Delete
                </button>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <h3>Total: ${total.toFixed(2)}</h3>
            <button>Checkout</button>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;

