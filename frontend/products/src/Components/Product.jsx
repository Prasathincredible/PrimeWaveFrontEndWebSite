import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const products = [
  {
    title: 'Textiles Goods',
    image: '/images/textiles_goods.jpg',
    path: '/products/textiles-goods',
    description:
      'Explore our range of home textiles, apparels, industrial, and sustainable textiles. We deliver globally compliant, custom-manufactured products tailored to your market needs. Our commitment to quality and innovation ensures client satisfaction across global markets.',
  },
  {
    title: 'Agro Commodities',
    image: '/images/agro_commodities.jpg',
    path: '/products/agro-commodities',
    description:
      'From grains and pulses to premium spices, our agro commodities meet the highest global standards. We ensure freshness, compliance, and packaging quality that supports international trade with reliability and excellence in every shipment.',
  },
  {
    title: 'Organic Fertilizers',
    image: '/images/organic_fertilizers.jpg',
    path: '/products/organic-fertilizers',
    description:
      'Eco-friendly and effective, our organic fertilizers promote sustainable farming. With zero chemical residue, they improve soil fertility and crop yield. A perfect choice for modern agriculture that values the planet and productivity equally.',
  },
];

const Products = () => {
  return (
    <div className="bg-white">

      {/* ✅ Hero Section (Unchanged) */}
      <div
        className="relative w-full h-[380px] md:h-[450px] bg-cover bg-center flex items-start justify-start px-6 md:px-20 py-10"
        style={{ backgroundImage: "url('/green-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <div className="relative z-20 text-white mt-40">
          <h1 className="text-4xl md:text-7xl font-bold mb-3">Our Products</h1>
          <div className="mt-4 text-lg flex items-center gap-2 text-left">
            <Link to="/" className="hover:underline">Home</Link>
            <span className="mx-1">→</span> Products
          </div>
        </div>
      </div>

      {/* ✅ Product Sections */}
      <div className="py-14 px-4 sm:px-6 lg:px-20 space-y-20">
        {products.map((product, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex flex-col ${
                isEven ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-10 md:gap-16`}
            >
              {/* 🖼️ Image */}
              <div className="w-full md:w-[40%] mx-auto">
                <img
                  src={product.image}
                  alt={product.title}
                  className="rounded-lg shadow-md w-full h-[380px] object-cover"
                />
              </div>

              {/* 📄 Text Content */}
              <div className="w-full md:w-[60%] mx-auto text-center md:text-left">
                <h2 className="text-3xl md:text-3xl font-bold text-green-800 mb-4">
                  {product.title}
                </h2>
                <p className="text-gray-700 text-xl leading-relaxed mb-6 max-w-2xl mx-auto md:mx-0">
                  {product.description}
                </p>
                <Link
                  to={product.path}
                  className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2.5 rounded-md transition duration-300"
                >
                  View Products
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
