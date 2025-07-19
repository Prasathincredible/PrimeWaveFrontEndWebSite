import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const categories = {
  'Processed Coconut Products': [
    { name: 'Virgin Coconut Oil', image: '/images/virgin_coconut_oil.jpg', description: 'Pure cold-pressed oil rich in antioxidants.\nIdeal for cooking and skincare routines.\nA staple for a natural and healthy lifestyle.' },
    { name: 'Desiccated Coconut Powder', image: '/images/desiccated_coconut_powder.jpg', description: 'Finely grated and dried coconut flesh.\nPerfect for baking, curries, and desserts.\nRetains all natural flavor and aroma.' },
    { name: 'Coconut Sugar', image: '/images/coconut_sugar.jpg', description: 'Low glycemic natural sweetener alternative.\nSourced from the nectar of coconut blossoms.\nIdeal for health-conscious recipes.' },
    { name: 'Tender Coconut Water', image: '/images/tender_coconut_water.jpg', description: 'Hydrating drink packed with electrolytes.\nSourced directly from young coconuts.\nPerfect for natural post-workout recovery.' },
  ],
  'Healthy & Organic Foods': [
    { name: 'Millet', image: '/images/millet.jpg', description: 'Ancient gluten-free grain with high fiber.\nGreat for digestion and sustained energy.\nA superfood for balanced meals.' },
    { name: 'Millet Flour', image: '/images/millet_flour.jpg', description: 'Stone-ground flour from wholesome millets.\nUsed in rotis, pancakes, and baking.\nAdds nutrition to every dish.' },
    { name: 'Jaggery', image: '/images/jaggery.jpg', description: 'Unrefined sugar with essential minerals.\nMade from concentrated cane juice.\nA healthy replacement for white sugar.' },
    { name: 'Palm Sugar', image: '/images/Palm_sugar.jpg', description: 'Natural sweetener made from palm sap.\nRich in potassium, iron, and zinc.\nIdeal for desserts and traditional dishes.' },
  ],
  'Vegetables & Fruits (Fresh/Frozen)': [
    { name: 'Vegetables', image: '/images/fresh_vegetables.jpg', description: 'Handpicked seasonal vegetables daily.\nPacked with vitamins and fiber.\nPerfect for a balanced, healthy diet.' },
    { name: 'Fruits', image: '/images/fresh_fruits.jpg', description: 'Juicy, colorful fruits from organic farms.\nRich in antioxidants and nutrients.\nGreat for snacking and smoothies.' },
  ],
  'Cereals & Pulses': [
    { name: 'Cereals', image: '/images/cereals.jpg', description: 'Nutritious grains for daily energy needs.\nHigh in fiber, iron, and B-vitamins.\nEssential part of a wholesome diet.' },
    { name: 'Pulses', image: '/images/pulses.jpg', description: 'Protein-rich lentils and legumes.\nVital for muscle growth and immunity.\nA core ingredient in Indian meals.' },
  ],
  'Dried Fruits': [
    { name: 'Dried Fruits', image: '/images/dried_fruits.jpg', description: 'Naturally dried, no additives or sugar.\nPerfect as snacks or cooking ingredients.\nLoaded with fiber, iron, and energy.' },
  ],
};

const AgroCommodities = () => {
  const [selectedCategories, setSelectedCategories] = useState(['Processed Coconut Products']);
  const [searchTerm, setSearchTerm] = useState('');
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
      <h1 className="text-3xl font-bold text-center text-green-800 mb-6">Agro Commodities</h1>

      <div className="mb-4">
        <button
          onClick={() => navigate('/products')}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
        >
          ← Back to Products
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters */}
        <div className="md:w-1/5 w-full">
          <h2 className="text-3xl font-semibold mb-2 text-center md:text-left">Filter Categories</h2>
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

        {/* Products */}
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
      onClick={() => console.log('Search clicked')} // Optional: can be used to trigger manual search
      className="bg-green-600 text-white px-4 py-2 hover:bg-green-700 transition"
    >
      Search
    </button>
  </div>
</div>

       

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

    {/* Bottom Product Name (always visible, hidden on hover) */}
    <div className="absolute bottom-0 left-0 right-0 bg-white/80 text-green-900 text-center py-2 font-semibold transition-opacity duration-500 group-hover:opacity-0">
      {product.name}
    </div>

    {/* Hover Overlay */}
    <div className="absolute inset-0 flex flex-col justify-end bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <div className="bg-white/90 backdrop-blur-sm text-left p-4 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
        <h3 className="text-lg font-bold text-green-800">{product.name}</h3>
        <p className="text-gray-700 text-sm mt-1 whitespace-pre-line">
          {product.description}
        </p>
      </div>
    </div>
  </motion.div>
))}

            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AgroCommodities;
