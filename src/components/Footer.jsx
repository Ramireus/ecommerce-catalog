import React from 'react';
import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About TechStore</h4>
            <p>
              Your one-stop shop for premium tech products. Curated selection
              of the best electronics and accessories.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#products">Products</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#shipping">Shipping Info</a>
              </li>
              <li>
                <a href="#returns">Returns</a>
              </li>
              <li>
                <a href="#privacy">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://twitter.com" className="social-link">
                𝕏
              </a>
              <a href="https://linkedin.com" className="social-link">
                💼
              </a>
              <a href="https://github.com" className="social-link">
                💻
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} TechStore. All rights reserved.</p>
          <p className="built-with">
            Built with React + Vite for DevOps & CI/CD Workshop
          </p>
        </div>
      </div>
    </footer>
  );
};
