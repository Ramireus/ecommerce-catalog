import React from 'react';
import { ShoppingCart, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Header.css';

export const Header = ({ onCartClick, searchQuery, onSearchChange }) => {
  const { totalItems } = useCart();

  return (
    <header className="header">
      <div className="container-fluid">
        <div className="header-content">
          <div className="logo-section">
            <h1 className="logo">
              <span className="logo-icon">🛍️</span>
              TechStore
            </h1>
            <p className="tagline">Premium Tech Products</p>
          </div>

          <div className="search-section">
            <div className="search-bar">
              <Search size={20} className="search-icon" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="search-input"
              />
            </div>
          </div>

          <button className="cart-button" onClick={onCartClick}>
            <ShoppingCart size={24} />
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </button>
        </div>
      </div>
    </header>
  );
};
