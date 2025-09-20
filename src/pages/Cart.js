import React, { useState } from 'react';
import './Cart.css';
import { sendOrderEmail } from '../Data/email';

function Cart({ cartItems, onRemoveItem, clearCart }) {
  const [loading, setLoading] = useState(false);
 const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  // Group items by id and sum quantities
  const grouped = cartItems.reduce((acc, item) => {
    if (!acc[item.id]) {
      acc[item.id] = { ...item, quantity: 1 };
    } else {
      acc[item.id].quantity++;
    }
    return acc;
  }, {});

  const items = Object.values(grouped);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // For demo, hardcoded customer info, replace with form inputs if needed

  const handleOrderNow = () => {
  if (items.length === 0) {
    alert('Your cart is empty!');
    return;
  }

  if (!customerName.trim() || !customerPhone.trim()) {
    alert('Please enter your name and phone number.');
    return;
  }

  setLoading(true);

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      const locationUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

      const orderData = {
        name: customerName,
        phone: customerPhone,
        location: locationUrl,
        items: items
          .map(item => `${item.name} (x${item.quantity}) - ₹${(item.price * item.quantity).toFixed(2)}`)
          .join('\n'),
        total: `₹${total.toFixed(2)}`,
      };

      sendOrderEmail(orderData)
        .then(() => {
          setLoading(false);
          alert('Order placed successfully! Email sent.');
          clearCart();
          setCustomerName('');
          setCustomerPhone('');
        })
        .catch((error) => {
          setLoading(false);
          alert('Failed to send order email. Please try again.');
          console.error(error);
        });
    },
    (error) => {
      setLoading(false);
      alert('Unable to get your location. Please allow location access and try again.');
      console.error('Geolocation error:', error);
    }
  );
};



  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <div className="customer-info">
  <input
    type="text"
    placeholder="Your Name"
    value={customerName}
    onChange={(e) => setCustomerName(e.target.value)}
  />
  <input
    type="tel"
    placeholder="Phone Number"
    value={customerPhone}
    onChange={(e) => setCustomerPhone(e.target.value)}
  />
</div>

      {items.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items">
            {items.map(item => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Price: ₹{item.price.toFixed(2)}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Subtotal: ₹{(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => onRemoveItem(item.id)}
                  aria-label={`Remove ${item.name} from cart`}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="cart-footer">
            <h3>Total: ₹{total.toFixed(2)}</h3>
            <button
              className="order-btn"
              onClick={handleOrderNow}
              disabled={loading}
              aria-disabled={loading}
            >
              {loading ? 'Ordering...' : 'Order Now'}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;







