import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const categories = {
  'Processed Coconut Products': [
    { 
      name: 'Virgin Coconut Oil',
      image: '/images/virgin_coconut/main.jpg',
      popupImage: '/images/virgin_coconut/popup.jpg',
      description: 'Pure cold-pressed oil rich in antioxidants.\nIdeal for cooking and skincare routines.\nA staple for a natural and healthy lifestyle.'
    },
    { 
      name: 'Desiccated Coconut Powder',
      image: '/images/desiccated_coconut/main.jpg',
      popupImage: '/images/desiccated_coconut/popup.jpg',
      description: 'Finely grated and dried coconut flesh.\nPerfect for baking, curries, and desserts.\nRetains all natural flavor and aroma.'
    },
    {
      name: 'Coconut Sugar',
      image: '/images/coconut_sugar/main.jpg',
      popupImage: '/images/coconut_sugar/popup.jpg',
      description: 'Low glycemic natural sweetener alternative.\nSourced from the nectar of coconut blossoms.\nIdeal for health-conscious recipes.'
    },
    {
      name: 'Tender Coconut Water',
      image: '/images/tender_coconut_water/main.jpg',
      popupImage: '/images/tender_coconut_water/popup.jpg',
      description: 'Hydrating drink packed with electrolytes.\nSourced directly from young coconuts.\nPerfect for natural post-workout recovery.'
    },
  ],
  'Healthy & Organic Foods': [
    {
      name: 'Millet Flour',
      image: '/images/millet_flour/main.jpg',
      popupImage: '/images/millet_flour/popup.jpg',
      description: 'Stone-ground flour from wholesome millets.\nUsed in rotis, pancakes, and baking.\nAdds nutrition to every dish.'
    },
    {
      name: 'Jaggery',
      image: '/images/jaggery/main.jpg',
      popupImage: '/images/jaggery/popup.jpg',
      description: 'Unrefined sugar with essential minerals.\nMade from concentrated cane juice.\nA healthy replacement for white sugar.'
    },
    /*{
      name: 'Palm Sugar',
      image: '/images/palm_sugar/main.jpg',
      popupImage: '/images/palm_sugar/popup.jpg',
      description: 'Natural sweetener made from palm sap.\nRich in potassium, iron, and zinc.\nIdeal for desserts and traditional dishes.'
    },*/
  ],
  'Vegetables & Fruits (Fresh/Frozen)': [
    {
      name: 'Vegetables',
      image: '/images/vegetables/main.jpg',
      popupImage: '/images/vegetables/popup.jpg',
      description: 'Handpicked seasonal vegetables daily.\nPacked with vitamins and fiber.\nPerfect for a balanced, healthy diet.'
    },
    {
      name: 'Fruits',
      image: '/images/fruits/main.jpg',
      popupImage: '/images/fruits/popup.jpg',
      description: 'Juicy, colorful fruits from organic farms.\nRich in antioxidants and nutrients.\nGreat for snacking and smoothies.'
    },
  ],
  'Cereals & Pulses': [
    {
      name: 'Cereals',
      image: '/images/cereals/main.jpg',
      popupImage: '/images/cereals/popup.jpg',
      description: 'Nutritious grains for daily energy needs.\nHigh in fiber, iron, and B-vitamins.\nEssential part of a wholesome diet.'
    },
    {
      name: 'Pulses',
      image: '/images/pulses/main.jpg',
      popupImage: '/images/pulses/popup.jpg',
      description: 'Protein-rich lentils and legumes.\nVital for muscle growth and immunity.\nA core ingredient in Indian meals.'
    },
  ],
  /*'Dried Fruits': [
    {
      name: 'Dried Fruits',
      image: '/images/dried_fruits/main.jpg',
      popupImage: '/images/dried_fruits/popup.jpg',
      description: 'Naturally dried, no additives or sugar.\nPerfect as snacks or cooking ingredients.\nLoaded with fiber, iron, and energy.'
    },
  ],*/
};

const AgroCommodities = () => {
  const [selectedCategories, setSelectedCategories] = useState(['Processed Coconut Products']);
  const [searchTerm, setSearchTerm] = useState('');
  const [popupImage, setPopupImage] = useState(null); // Modal state
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
      <h1 className="text-3xl font-bold text-center text-green-800 mb-6">
        Agro Commodities
      </h1>

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
          <h2 className="text-3xl font-semibold mb-2 text-center md:text-left">
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
              <button className="bg-green-600 text-white px-4 py-2 hover:bg-green-700 transition">
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
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Bottom Label */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white/80 text-green-900 text-center py-2 font-semibold transition-opacity duration-500 group-hover:opacity-0">
                    {product.name}
                  </div>

                  {/* Hover Area */}
                  <div className="absolute inset-0 flex flex-col justify-end bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-white/90 backdrop-blur-sm text-left p-4 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      <h3 className="text-lg font-bold text-green-800">{product.name}</h3>
                      <p className="text-gray-700 text-sm mt-1 whitespace-pre-line">
                        {product.description}
                      </p>
                      <button
                        onClick={() => setPopupImage(product.popupImage)}
                        className="mt-3 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                      >
                        View More
                      </button>
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
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-3xl">
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

export default AgroCommodities;
