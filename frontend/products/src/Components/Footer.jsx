import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThreads } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white px-6 py-10 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* About Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-gray-400 mb-4">
            Our work culture fosters collaboration, continuous improvement, and a responsibility toward nature and global communities.
          </p>

          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://www.facebook.com/profile.php?id=61578270515837" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-white bg-gray-700 p-3 rounded-full text-5xl hover:bg-green-600" />
            </a>

<a
  href="https://www.threads.net/@primewaveinternational"
  target="_blank"
  rel="noopener noreferrer"
>
  <FontAwesomeIcon
    icon={faThreads}
    className="text-white bg-gray-700 p-3 rounded-full text-2xl hover:bg-green-600"
  />
</a>

           
            <a href="https://www.linkedin.com/company/primewave-international-llp" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-white bg-gray-700 p-3 rounded-full text-5xl hover:bg-green-600" />
            </a>
            <a href="https://www.instagram.com/primewaveinternational?igsh=MTZqMGE4enFneHVnZQ==" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white bg-gray-700 p-3 rounded-full text-5xl hover:bg-green-600" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/products">Products</Link></li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Products</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/products/textiles-goods">Textiles Goods</Link></li>
            <li><Link to="/products/agro-commodities">Agro Commodities</Link></li>
            <li><Link to="/products/organic-fertilizers">Organic Fertilizers</Link></li>
          </ul>
        </div>

        {/* Contact */}
<div>
  <h3 className="text-xl font-semibold mb-4">Contact</h3>
  <ul className="space-y-2 text-gray-400 text-sm">
    <li>Email: Info@primewaveinternational.com</li>
    <li>Phone: +91 94881 33430</li>
    <li>Location: Karur, Tamil Nadu</li>
    <li>Working Hours: Mon - Sat (9AM - 6PM)</li>
    <li>Time Zone: GMT+5:30 (Indian Standard Time)</li>
  </ul>
</div>



      </div>

      {/* Bottom line */}
      <div className="text-center text-sm text-gray-500 mt-10 pt-6 border-t border-gray-700">
        © {new Date().getFullYear()} Orgarium. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
