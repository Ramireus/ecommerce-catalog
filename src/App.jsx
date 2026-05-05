import { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Filters } from './components/Filters';
import { ProductList } from './components/ProductList';
import { Cart } from './components/Cart';
import { Footer } from './components/Footer';
import { PRODUCTS, PRICE_RANGES } from './data/products';
import './App.css';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  // Filter products based on search, category, and price
  const filteredProducts = useMemo(() => {
    let result = PRODUCTS;

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter((product) => product.category === selectedCategory);
    }

    // Filter by price range
    if (selectedPriceRange !== 'all') {
      const range = PRICE_RANGES.find((r) => r.id === selectedPriceRange);
      if (range) {
        result = result.filter(
          (product) => product.price >= range.min && product.price <= range.max
        );
      }
    }

    return result;
  }, [searchQuery, selectedCategory, selectedPriceRange]);

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedPriceRange('all');
  };

  return (
    <div className="app">
      <Header
        onCartClick={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main className="main-content">
        <div className="container-fluid">
          <div className="content-wrapper">
            <aside className="filters-sidebar">
              <Filters
                selectedCategory={selectedCategory}
                selectedPriceRange={selectedPriceRange}
                onCategoryChange={setSelectedCategory}
                onPriceRangeChange={setSelectedPriceRange}
                onClearFilters={handleClearFilters}
              />
            </aside>

            <section className="products-section">
              <ProductList
                products={filteredProducts}
                isLoading={false}
                noResults={filteredProducts.length === 0 && searchQuery.trim() !== ''}
              />
            </section>
          </div>
        </div>
      </main>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      <Footer />
    </div>
  );
}

export default App;
