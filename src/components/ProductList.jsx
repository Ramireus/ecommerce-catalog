import React from 'react';
import { ProductCard } from './ProductCard';
import './ProductList.css';

export const ProductList = ({ products, isLoading, noResults }) => {
  if (isLoading) {
    return (
      <div className="products-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading products...</p>
        </div>
      </div>
    );
  }

  if (noResults || products.length === 0) {
    return (
      <div className="products-container">
        <div className="no-results">
          <p>😔 No products found</p>
          <p className="no-results-hint">Try adjusting your filters</p>
        </div>
      </div>
    );
  }

  return (
    <div className="products-container">
      <div className="products-count">
        Showing {products.length} product{products.length !== 1 ? 's' : ''}
      </div>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
