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
    { name: 'Activewear', image: '/images/activewear.jpg', description: 'Flexible and functional activewear.\nSweat-wicking fabric keeps you dry and cool.\nSupports high performance with comfort.' },
    { name: 'Sportswear', image: '/images/sportswear.jpg', description: 'Tailored for athletes and active lifestyles.\nStretchy, breathable, and durable design.\nLooks sharp while performing under pressure.' },
    { name: 'School Uniforms', image: '/images/school_uniforms.jpg', description: 'Neatly stitched and durable for daily use.\nComfortable fit that supports active children.\nMade to last the school year and beyond.' },
    { name: 'Corporate Uniforms', image: '/images/corporate_images.jpg', description: 'Smart uniforms that reflect professionalism.\nDesigned for daily wear and brand identity.\nComfort meets corporate style.' },
  ],
  'Industrial & Technical Textiles': [
    {
      name: 'Fire and Waterproof Fabrics',
      image: '/images/waterproof_fabrics.jpg',
      description: 'Fire-resistant & waterproof fabrics (Treated Polyester & Nylon Blends, PU/PVC Coated Polyester & Nylon, GORE-TEX & PTFE Laminated Fabrics, Waxed & Rubberized Cotton)'
    },
    {
      name: 'Medical Textiles',
      image: '/images/medical1.jpg',
      description: 'Medical textiles (surgical gowns, PPE kits, masks, wound dressings)'
    },
    {
      name: 'Geotextiles',
      image: '/images/coco-coir.jpg',
      description: 'Geotextiles for construction (Coir & jute [natural fibre based], Woven & Non – Owen [Synthetic – Polypropylene/Polyester])'
    },
  ],
  'Sustainable Textiles': [
    {
      name: 'Bamboo and Hemp Fabrics',
      image: '/images/bamboo-fabrics.jpg',
      description: 'Bamboo and hemp fabrics (Bamboo Cotton Blends, Silk, Terry & Fleece, Antibacterial Bamboo Fabrics, Hemp Linen, Hemp Canvas & Twill, Pure Hemp Fabrics, Hemp Cotton Blends)'
    },
    {
      name: 'RPET Clothing',
      image: '/images/RPET.jpg',
      description: 'Recycled polyester clothing (T-Shirts & Activewears, Blends, Jackets & Outerwear)'
    },
  ],
};

const TextilesGoods = () => {
  const [selectedCategories, setSelectedCategories] = useState(['Home Textiles']);
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
      <h1 className="text-3xl font-bold text-center text-green-800 mb-6">
        Textiles Goods
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

export default TextilesGoods;
