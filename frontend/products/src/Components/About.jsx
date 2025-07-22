import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const missionPoints = [
  'Ensure reliability and transparency in every stage of our export operations.',
  'Promote sustainable and eco-friendly practices, especially in organic agriculture and product sourcing.',
  'Build long-term partnerships with clients through trust, consistency, and personalized service.',
  'Empower local farmers, artisans, and manufacturers by giving them access to international markets.',
  'Deliver quality and value with every shipment, meeting global standards and expectations.',
];

const About = () => {
  return (
    <div className="bg-white text-gray-800">

      {/* Hero Section */}
      <div
        className="relative w-full h-[380px] md:h-[450px] bg-cover bg-center flex items-start justify-start px-6 md:px-20 py-10"
        style={{ backgroundImage: "url('/green-bg.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      
        {/* Text Content */}
        <div className="relative z-20 text-white mt-40">
          <h1 className="text-4xl md:text-7xl font-bold mb-3">About Us</h1>
          <div className="mt-4 text-lg flex items-center gap-2 text-left">
            <Link to="/" className="hover:underline">Home</Link> <span className="mx-1">→</span> About us
          </div>
        </div>
      </div>
    

      {/* Belief Section - Image Left, Text Right */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="/belief.jpg" // Replace with a real belief image path
            alt="Our Belief"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
        <div className="text-justify">
          <h2 className="text-4xl font-bold text-green-800 mb-4">Our Belief</h2>
          <p className="text-xl leading-relaxed">
            <strong>Primewave International LLP</strong> is a growing Indian manufacturer and exporter specializing in
            textiles, Agro and food products, and organic fertilizers. Established with a modern vision and a strong
            entrepreneurial foundation, the company reflects the energy of a new venture combined with a deep respect
            for traditional Indian quality and craftsmanship.
          </p>
        </div>
      </div>

      {/* Mission Section - Text Left, Image Right */}
      <div className="bg-green-50 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-justify">
            <h3 className="text-4xl font-bold text-green-800 mb-6">Our Mission</h3>
            <ul className="space-y-5">
              {missionPoints.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-xl text-gray-700 leading-relaxed"
                >
                  <CheckCircle className="text-green-700 w-6 h-6 mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img
              src="/images/mission.jpg" // Replace with actual mission-related image
              alt="Our Mission"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Vision Section - Centered */}
      <div className="bg-white py-16 px-6 text-center max-w-4xl mx-auto">
        <h3 className="text-4xl font-bold text-green-800 mb-6">Our Vision</h3>
        <p className="text-xl text-gray-700 leading-relaxed">
          Our company operates with a fresh, agile approach—combining traditional product knowledge with modern
          supply chain practices. We manufacture and supply premium garments and fabrics, Agro Commodities, and
          eco-friendly fertilizers, ensuring every product meets global quality standards.
        </p>
      </div>

      {/* CTA Section */}
      <div className="text-center py-12">
        <p className="text-lg font-medium mb-4">
          Interested in collaborating or learning more?
        </p>
        <Link
          to="/contact"
          className="inline-block bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md text-lg font-semibold transition duration-300"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default About;
