import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const categories = {
  'Organic Manure (Neem Fertilizers)': [
    {
      name: 'Neem Fertilizers',
      image: '/images/neem_fertilizers/main.jpg',
      popup: '/images/neem_fertilizers/popup.jpg',
      description:
        'High-quality organic neem-based fertilizer that improves soil health and protects plants naturally.',
    },
  ],
  'Seaweed-based Fertilizers': [
    {
      name: 'Seaweed Fertilizers',
      image: '/images/seaweed_fertilizers/main.jpg',
      popup: '/images/seaweed_fertilizers/popup.jpg',
      description:
        'Nutrient-rich seaweed fertilizer that boosts plant growth and enhances crop yield.',
    },
  ],
};

const OrganicFertilizers = () => {
  const [selectedCategories, setSelectedCategories] = useState([
    'Organic Manure (Neem Fertilizers)',
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [popupImage, setPopupImage] = useState(null);
  const navigate = useNavigate();

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const filteredProducts = selectedCategories
    .flatMap((category) => categories[category])
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-green-800 mb-6">
        Organic Fertilizers
      </h1>

      {/* Back Button */}
      <div className="mb-4">
        <button
          onClick={() => navigate('/products')}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
        >
          ← Back to Products
        </button>
      </div>

      {/* Layout */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar Filter */}
        <div className="md:w-1/5 w-full">
          <h2 className="text-3xl font-semibold mb-2 text-left">
            Filter Categories
          </h2>
          <ul className="space-y-4">
            {Object.keys(categories).map((category) => (
              <li key={category} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => toggleCategory(category)}
                  className="accent-green-600"
                />
                <label className="text-gray-800 text-xl">{category}</label>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="md:w-4/5 w-full">
          {/* Search */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <h2 className="text-lg font-semibold">
              Showing {filteredProducts.length} products
            </h2>
            <div className="flex w-full sm:w-auto items-center border-2 border-green-500 rounded-md overflow-hidden">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 text-gray-700 placeholder-gray-500 focus:outline-none"
              />
              <button
                onClick={() => console.log('Search clicked')}
                className="bg-green-600 text-white px-4 py-2 hover:bg-green-700 transition"
              >
                Search
              </button>
            </div>
          </div>

          {/* Product Cards */}
          {filteredProducts.length === 0 ? (
            <p className="text-gray-600">No products found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition h-80"
                >
                  {/* Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Bottom Product Name */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white/80 text-green-900 text-center py-2 font-semibold transition-opacity duration-500 group-hover:opacity-0">
                    {product.name}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-white/90 backdrop-blur-sm text-left p-4 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      <h3 className="text-lg font-bold text-green-800">
                        {product.name}
                      </h3>
                      <p className="text-gray-700 text-sm mt-1 whitespace-pre-line">
                        {product.description}
                      </p>

                      {/* View More Popup Button */}
                      {product.popup && (
                        <button
                          className="mt-3 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                          onClick={() => setPopupImage(product.popup)}
                        >
                          View More
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ⭐ Popup Modal */}
      {popupImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-3xl w-full">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-gray-300 z-50"
              onClick={() => setPopupImage(null)}
            >
              &times;
            </button>

            {/* Popup Image */}
            <img
              src={popupImage}
              alt="Popup"
              className="w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default OrganicFertilizers;
