import React, { useEffect, useState } from 'react';
import './Carousel.css';



const services = [
  {
    title: "Fine Dining",
    description: "Enjoy exquisite multi-course meals crafted by master chefs in an elegant dining atmosphere.",
    image: "https://imgs.search.brave.com/Llz8KHmPECcwpygVp5YTVxKEP7NFxMQAq3WwWRlDOXk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTAx/ODE0MTg5MC9waG90/by90d28tZW1wdHkt/d2luZS1nbGFzc2Vz/LXNpdHRpbmctaW4t/YS1yZXN0YXVyYW50/LW9uLWEtd2FybS1z/dW5ueS1hZnRlcm5v/b24uanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPU9jY0p2MW9L/V1NURHFKNklydzdp/VzFORWJMMG11VTJ5/bHFQM0VPaE95RWc9"
  },
  {
    title: "Room Serving",
    description: " we serve you freshly prepared meals, drinks, and desserts—just a call away.",
    image: "https://imgs.search.brave.com/jdg4FoP6up_yASMrnjzdkL-A6x3vfMKhqaNiKkrdQ3Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jbG9zZS11cC12/aWV3LXdhaXRlci1z/ZXJ2aW5nLXNhbGFk/LXJlc3RhdXJhbnRf/MzkyODk1LTI2MDE5/OS5qcGc_c2VtdD1h/aXNfaHlicmlkJnc9/NzQwJnE9ODA"
  },
  {
    title: "Fast Delivery",
    description: "Order your favorite dishes from our hotel menu and get them delivered hot and fresh to your doorstep.",
    image: "https://imgs.search.brave.com/DbP8cz79OPqm0n3WgxiB68hb20Fy2CfVqJQEhZf0JRg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzQ2LzQ5LzQ2/LzM2MF9GXzM0NjQ5/NDYzMV9wU1hONzdl/RExYU1hQZWoyU1Bk/UEY2bnJoclN1V3pn/Qy5qcGc"
  }
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % services.length);
    }, 5000); // 3s per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel">
      {services.map((service, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${service.image})` }}
        >
          <div className="carousel-overlay">
            <div className="carousel-text">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;

