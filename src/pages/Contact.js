// src/components/Contact.js

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'; // optional styling

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_s5t5qv8',
      'template_7qtxxab',
      form.current,
      '51-p8Y0fs5Q9uLOWs'
    ).then(
      (result) => {
        console.log(result.text);
        setSent(true);
        setError('');
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
        setError('Failed to send message. Please try again.');
        setSent(false);
      }
    );
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>

      {/* Phone Call Link */}
      <div className="phone-call">
        <p>You can also call us:</p>
        <a href="tel:+1234567890" className="phone-link">📞 +91 9947768714</a>
      </div>

      {/* Email Form */}
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label>Name</label>
        <input type="text" name="user_name" required />

        <label>Email</label>
        <input type="email" name="user_email" required />

        <label>Message</label>
        <textarea name="message" required />

        <button type="submit">Send</button>
      </form>

      {sent && <p className="success">Message sent successfully!</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Contact;
