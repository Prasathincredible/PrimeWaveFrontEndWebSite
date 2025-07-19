import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white text-black fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">

         {/* Mobile View: Logo + Brand Name (Smaller) */}
<div className="md:hidden flex items-center gap-2">
  <img
    src="/images/logo.jpeg"
    alt="PrimeWave Logo"
    className="h-10 w-10 object-contain"
  />
  <div className="flex flex-col leading-tight">
    <span className="text-lg font-bold">
      <span className="text-blue-600">PrimeWave</span>
      <span className="text-green-600">Intl</span> LLP
    </span>
    <span className="text-[10px] italic text-gray-600">
      Mfg & Exporters of Textile, Agro & Fertilizers
    </span>
  </div>
</div>


          {/* Desktop View: Logo + Title (Clickable) */}
          <NavLink to="/" className="hidden md:flex items-center gap-3">
            <img
              src="/images/logo.jpeg"
              alt="PrimeWave Logo"
              className="h-16 w-16 md:h-20 md:w-20 object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-2xl md:text-3xl font-extrabold tracking-wide">
                <span className="text-blue-600">PrimeWave</span>
                <span className="text-green-600">International</span> LLP
              </span>
              <span className="text-sm italic text-gray-600 mt-1">
                Mfg & Exporters of Textile Garments, Agro Commodities & Organic Fertilizers
              </span>
            </div>
          </NavLink>

          {/* Hamburger Toggle (Mobile) */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-10 text-xl font-semibold">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md transition duration-200 ${
                    isActive ? 'bg-green-100 text-black' : 'hover:bg-blue-100'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-white px-4 py-4 space-y-3"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block text-xl font-semibold px-3 py-2 rounded-md text-black hover:bg-green-100 transition"
              >
                {item.name}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
