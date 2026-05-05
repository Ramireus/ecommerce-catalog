import React from 'react';
import { X } from 'lucide-react';
import { CATEGORIES, PRICE_RANGES } from '../data/products';
import './Filters.css';

export const Filters = ({
  selectedCategory,
  selectedPriceRange,
  onCategoryChange,
  onPriceRangeChange,
  onClearFilters,
}) => {
  const hasActiveFilters =
    selectedCategory !== 'all' || selectedPriceRange !== 'all';

  return (
    <div className="filters-container">
      <div className="filters-header">
        <h3>Filters</h3>
        {hasActiveFilters && (
          <button className="clear-filters" onClick={onClearFilters}>
            <X size={18} />
            Clear All
          </button>
        )}
      </div>

      <div className="filter-group">
        <label className="filter-label">Category</label>
        <div className="filter-options">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`filter-option ${
                selectedCategory === cat.id ? 'active' : ''
              }`}
              onClick={() => onCategoryChange(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <label className="filter-label">Price Range</label>
        <div className="filter-options">
          {PRICE_RANGES.map((range) => (
            <button
              key={range.id}
              className={`filter-option ${
                selectedPriceRange === range.id ? 'active' : ''
              }`}
              onClick={() => onPriceRangeChange(range.id)}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
