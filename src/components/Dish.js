import React, { useState } from 'react';
import food from '../Data/Food';
import './Dish.css';
import add from '../assets/add.png';
import sub from '../assets/sub.png';

function Dish({ onAddToCart }) {
  const [quantities, setQuantities] = useState(food.map(() => 0));

  const handleAdd = (item, index) => {
    const updated = [...quantities];
    updated[index]++;
    setQuantities(updated);

    const itemToAdd = {
      id: item.id,
      name: item.name,
      image: item.image,
      price: item.price,
    };

    onAddToCart(itemToAdd);
  };

  const handleSub = (index) => {
    const updated = [...quantities];
    if (updated[index] > 0) {
      updated[index]--;
      setQuantities(updated);
    }
  };

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Menu</h1>
      <div className="dish-row">
        {food.map((item, index) => (
          <div className="dish-card" key={item.id}>
            <h2>{item.name}</h2>
            <img className="dish-img" src={item.image} alt={item.name} />
            <p>₹{item.price}</p>
            <div className="quantity-buttons">
              <img
                src={sub}
                alt="Subtract"
                className={`icon-button ${quantities[index] === 0 ? 'disabled' : ''}`}
                onClick={() => handleSub(index)}
              />
              <span className="quantity">{quantities[index]}</span>
              <img
                src={add}
                alt="Add"
                className="icon-button"
                onClick={() => handleAdd(item, index)}
              />
            </div>
          </div>
        ))}
      </div>
      <div className='reminder'>
        <h2>Reminder:</h2>
        <p>Your Added Product must be in the cart Section You can order from there</p>
        
      </div>
    </>
  );
}

export default Dish;




