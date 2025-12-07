import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const categories = {
  'Home Textiles': [
    { name: 'Bedsheets', image: '/images/bedsheets.jpg', description: 'Soft cotton bedsheets crafted for comfort and elegance.\nBreathable material keeps you cool and cozy.\nIdeal for restful and luxurious sleep.' },
    { name: 'Pillow Covers', image: '/images/pillow_covers.jpg', description: 'Stylish pillow covers to elevate bedroom decor.\nMade from soft, skin-friendly fabric.\nPerfect for everyday comfort and elegance.' },
    { name: 'Duvet Covers', image: '/images/duvett2.webp', description: 'Protective and modern duvet covers.\nKeeps your duvet clean and enhances your room.\nAvailable in elegant designs and soft fabrics.' },
    { name: 'Terry Towels', image: '/images/terry_towels.jpg', description: 'Absorbent towels crafted for comfort and durability.\nSuper absorbent and plush terry towels.\nGives a soft, refreshing post-bath feel.' },
    { name: 'Bathrobes', image: '/images/bathrobes.jpeg', description: 'Plush bathrobes offering warmth and post-shower relaxation.\nPerfect after a shower or for lounging.\nWarm, soft, and breathable fabric.' },
    { name: 'Table Linens', image: '/images/table_linen.jpg', description: 'Elegant table linens for a refined dining experience.\nAdds class to both casual and formal meals.\nDurable fabric with a neat finish.' },
    { name: 'Kitchen Linens', image: '/images/kitchen_linen.jpg', description: 'Durable kitchen linens blending style and utility.\nDesigned for function, fashion, and easy cleaning.\nPerfect for everyday kitchen tasks.' },
    { name: 'Napkins', image: '/images/napkins.jpg', description: 'Soft fabric napkins ideal for casual or formal dining.\nReusable, washable, and eco-friendly choice.\nGreat for family dinners or gatherings.' },
    { name: 'Curtains', image: '/images/curtains.jpg', description: 'Stylish curtains that enhance décor and control lighting.\nControl light, reduce noise, and add elegance.\nAvailable in a variety of shades and styles.' },
  ],
  'Apparels': [
    { name: 'Cotton and Linen T-Shirts', image: '/images/cotton-tshirt.jpg', description: 'Breathable tees made from cotton and linen.\nSoft on skin and perfect for warm days.\nSimple, versatile, and eco-conscious.' },
    { name: 'Activewear and Sportswear', image: '/images/activewear.jpg', description: 'Flexible and functional activewear.\nSweat-wicking fabric keeps you dry and cool.\nSupports high performance with comfort.' },
    { name: 'School Uniforms', image: '/images/school_uniforms.jpg', description: 'Neatly stitched and durable for daily use.\nComfortable fit that supports active children.\nMade to last the school year and beyond.' },
  ],
  'Fire and Waterproof Fabrics': [
    {
      name: 'Waxed cotton canvas',
      image: '/images/Fire_and_Waterproof/Waxed_cotton_canvas/main.jpg',
      popupImage: '/images/Fire_and_Waterproof/Waxed_cotton_canvas/popup.jpg',
      description: 'Durable waxed cotton canvas — water repellent and rugged.\nUsed in jackets, bags and outdoor gear.'
    },
    {
      name: 'PTFE laminated polyester',
      image: '/images/Fire_and_Waterproof/PTFE_laminated_polyester/main.avif',
      popupImage: '/images/Fire_and_Waterproof/PTFE_laminated_polyester/popup.jpg',
      description: 'PTFE-laminated polyester: breathable yet waterproof.\nGreat for high-performance outerwear.'
    },
    {
      name: 'Nylon blends',
      image: '/images/Fire_and_Waterproof/Nylon_blends/main.jpg',
      popupImage: '/images/Fire_and_Waterproof/Nylon_blends/popup.jpg',
      description: 'Nylon blend fabrics — abrasion resistant and durable.\nUsed in technical wear and accessories.'
    },
    {
      name: 'PU/PVC coated materials',
      image: '/images/Fire_and_Waterproof/PU_PVC_coated_materials/main.jpg',
      popupImage: '/images/Fire_and_Waterproof/PU_PVC_coated_materials/popup.jpg',
      description: 'PU/PVC coated textiles for waterproofing and protective gear.\nCommon in tents/industrial covers.'
    },
  ],
  'Medical Textiles': [
    {
      name: 'Surgical gowns',
      image: '/images/Medical_Textiles/Surgical_gowns/main.jpg',
      popupImage: '/images/Medical_Textiles/Surgical_gowns/popup.jpg',
      description: 'Sterile surgical gowns with fluid resistance for operating rooms.'
    },
    {
      name: 'Surgical Masks',
      image: '/images/Medical_Textiles/Surgical_masks/main.jpg',
      popupImage: '/images/Medical_Textiles/Surgical_masks/popup.jpg',
      description: 'Multi-layer surgical masks for infection control.'
    },
    {
      name: 'Wound dressings',
      image: '/images/Medical_Textiles/Wound_dressings/main.jpg',
      popupImage: '/images/Medical_Textiles/Wound_dressings/popup.jpg',
      description: 'Sterile wound dressings with high absorbency.'
    },
  ],
  'Geotextiles': [
    {
      name: 'Coir fibre',
      image: '/images/Geotextiles/Coir_fibre/main.jpg',
      popupImage: '/images/Geotextiles/Coir_fibre/popup.jpg',
      description: 'Coir-based geotextiles for soil stabilization and erosion control.'
    },
    {
      name: 'Jute fibre',
      image: '/images/Geotextiles/Jute_fibre/main.jpg',
      popupImage: '/images/Geotextiles/Jute_fibre/popup.jpg',
      description: 'Natural jute geotextiles — biodegradable and strong.'
    },
    {
      name: 'Woven PET fabric',
      image: '/images/Geotextiles/Woven_PET_fabric/main.jpg',
      popupImage: '/images/Geotextiles/Woven_PET_fabric/popup.jpg',
      description: 'Woven PET fabrics for heavy-duty civil engineering use.'
    },
    {
      name: 'Non-woven Synthetic fabric',
      image: '/images/Geotextiles/Non_woven_Synthetic_fabric/main.jpg',
      popupImage: '/images/Geotextiles/Non_woven_Synthetic_fabric/popup.jpg',
      description: 'Non-woven synthetic geotextiles used for filtration and drainage.'
    },
  ],
  'Sustainable Textiles': [
    { name: 'Bamboo and Hemp Fabrics', image: '/images/bamboo-fabrics.jpg', description: 'Bamboo and hemp fabrics (Bamboo Cotton Blends, Silk, Terry & Fleece, Antibacterial Bamboo Fabrics, Hemp Linen, Hemp Canvas & Twill, Pure Hemp Fabrics, Hemp Cotton Blends)' },
  ],
};

/* Existing slides (untouched for old categories) */
const productSlides = {};
Object.values(categories).flat().forEach((product) => {
  const folder = product.name.replaceAll(' ', '_');
  const base = product.name.replaceAll(' ', '').toLowerCase();

  productSlides[product.name] = Array.from(
    { length: 20 },
    (_, i) => `/images/${folder}/${base}${i + 1}.jpg`
  );
});

const TextilesGoods = () => {
  const [selectedCategories, setSelectedCategories] = useState(['Home Textiles']);
  const [searchTerm, setSearchTerm] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeProduct, setActiveProduct] = useState(null);
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

  const openModal = (product) => {
    setActiveProduct(product);
    setCurrentSlide(0);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveProduct(null);
  };

  const prevSlide = () => {
    if (activeProduct?.popupImage) return;
    setCurrentSlide((prev) =>
      prev === 0 ? productSlides[activeProduct.name].length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    if (activeProduct?.popupImage) return;
    setCurrentSlide((prev) =>
      prev === productSlides[activeProduct.name].length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-green-800 mb-6">Textiles Goods</h1>

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
          <h2 className="text-3xl font-semibold mb-2 text-left">Filter Categories</h2>
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
                onClick={() => console.log('Search clicked')}
                className="bg-green-600 text-white px-4 py-2 hover:bg-green-700 transition"
              >
                Search
              </button>
            </div>
          </div>

          {/* Product Grid */}
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

                  <div className="absolute bottom-0 left-0 right-0 bg-white/80 text-green-900 text-center py-2 font-semibold transition-opacity duration-500 group-hover:opacity-0">
                    {product.name}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-white/90 backdrop-blur-sm text-left p-4 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      <h3 className="text-lg font-bold text-green-800">{product.name}</h3>
                      <p className="text-gray-700 text-sm mt-1 whitespace-pre-line">{product.description}</p>

                      <button
                        onClick={() => openModal(product)}
                        className="mt-3 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
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

      {/* MODAL */}
      {modalOpen && activeProduct && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

          {/* Top Right Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-6 text-white text-4xl font-bold z-50"
          >
            ×
          </button>

          {/* If product has popupImage → show SINGLE IMAGE */}
          {activeProduct.popupImage ? (
            <img
              src={activeProduct.popupImage}
              alt={activeProduct.name}
              className="max-h-[92vh] w-auto object-contain rounded-lg"
            />
          ) : (
            /* Slideshow with both arrows */
            <div className="relative w-11/12 md:w-3/4 lg:w-1/2 bg-white rounded-lg overflow-hidden">

  {/* Left Arrow */}
  <button
    onClick={prevSlide}
    className="absolute left-0 top-1/2 -translate-y-1/2 z-50 h-12 w-12 flex items-center justify-center text-green-700 text-3xl font-bold bg-white/30 hover:bg-white/60 rounded-full transition"
  >
    ←
  </button>

  {/* Slide Image */}
  <img
    src={productSlides[activeProduct.name][currentSlide]}
    alt="Slide"
    className="w-full h-96 object-contain bg-white"
  />

  {/* Right Arrow */}
  <button
    onClick={nextSlide}
    className="absolute right-0 top-1/2 -translate-y-1/2 z-50 h-12 w-12 flex items-center justify-center text-green-700 text-3xl font-bold bg-white/30 hover:bg-white/60 rounded-full transition"
  >
    →
  </button>

</div>

          )}
        </div>
      )}
    </div>
  );
};

export default TextilesGoods;
