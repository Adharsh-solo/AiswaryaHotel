// src/utils/email.js
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_slf9vai';
const TEMPLATE_ID = 'template_as4af6w';
const USER_ID = '51-p8Y0fs5Q9uLOWs';

export const sendOrderEmail = (orderData) => {
  const templateParams = {
    customerName: orderData.name,
    customerPhone: orderData.phone,
     location: orderData.location,
    order_details: orderData.items,
    total_amount: orderData.total,
  };

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
};
