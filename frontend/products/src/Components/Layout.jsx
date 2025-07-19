import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import WhatsAppButton from './WhatsAppButton';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20 px-4">
        <Outlet />
        <WhatsAppButton/>
      </div>
      <Footer/>
    </>
  );
};

export default Layout;
