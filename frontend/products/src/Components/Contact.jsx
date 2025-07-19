import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const fullMessage = `Hello, I am ${name}%0AEmail: ${email}%0A%0A${message}`;
    const phoneNumber = "919488133430";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${fullMessage}`;
    window.open(whatsappURL, "_blank");
    setFormData({ name: '', email: '', message: '' });
    setStatus('Redirecting to WhatsApp...');
  };

  return (
    <div className="w-full">

            {/* Hero Section */}
            <div
              className="relative w-full h-[380px] md:h-[450px] bg-cover bg-center flex items-start justify-start px-6 md:px-20 py-10"
              style={{ backgroundImage: "url('/green-bg.jpg')" }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
            
              {/* Text Content */}
              <div className="relative z-20 text-white mt-40">
                <h1 className="text-4xl md:text-7xl font-bold mb-3">Get In Touch</h1>
                <div className="mt-4 text-lg flex items-center gap-2 text-left">
                <Link to="/" className="hover:underline">Home</Link> <span className="mx-1">→</span> Products
                </div>
              </div>
            </div>


      {/* Info Section */}
      <section className="py-20 bg-white px-4 sm:px-10 lg:px-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div>
            <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-4">
              We’re Ready to Help You! <br />
              Need Any Foods or Consultations?
            </h2>
            <p className="text-gray-600 text-lg mt-2">
              Feel free to reach out to us anytime. We’re available for queries, consultation, and business support.
            </p>
          </div>

          {/* Right Image */}
          <div className="hidden md:block">
            <img
              src="/images/contact-side.jpg"
              alt="Contact Person"
              className="rounded-full object-cover w-full max-w-sm"
            />
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {/* Location Card */}
          <div className="bg-white shadow-xl rounded-xl p-8 border border-gray-200 relative min-h-[240px]">
            <div className="absolute -top-6 left-6 bg-yellow-400 p-4 rounded-full">
              <MapPin className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold mt-10 mb-3">Locations</h3>
            <p className="text-gray-700 text-[16px] leading-relaxed">
              PRIMEWAVE INTERNATIONAL LLP<br />
              146 E/1, Amman Nagar, Veerarakkiyam,<br />
              Karur, Tamil Nadu - 639114
            </p>
          </div>

          {/* Email Card */}
          <div className="bg-white shadow-xl rounded-xl p-8 border border-gray-200 relative min-h-[240px]">
            <div className="absolute -top-6 left-6 bg-yellow-400 p-4 rounded-full">
              <Mail className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold mt-10 mb-3">Email Address</h3>
            <p className="text-gray-700  text-[16px] leading-relaxed">
             Info@primewaveinternational.com<br />
             Operations@primewaveinternational.com
            </p>
          </div>

          {/* Phone Card */}
          <div className="bg-white shadow-xl rounded-xl p-8 border border-gray-200 relative min-h-[240px]">
            <div className="absolute -top-6 left-6 bg-yellow-400 p-4 rounded-full">
              <Phone className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold mt-10 mb-3">Phone Number</h3>
            <p className="text-gray-700 text-[16px] leading-relaxed">
              +91 9488133430<br />
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <div className="bg-gray-50 py-16 px-4 sm:px-10 lg:px-24">
        <div className="max-w-3xl mx-auto bg-white p-10 rounded-xl shadow-md border border-green-600">
          <h2 className="text-3xl font-semibold text-green-800 mb-8 text-center">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-400 px-5 py-4 rounded-md placeholder:font-bold placeholder:text-black focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-400 px-5 py-4 rounded-md placeholder:font-bold placeholder:text-black focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <textarea
              name="message"
              rows="6"
              required
              placeholder="Write Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-400 px-5 py-4 rounded-md placeholder:font-bold placeholder:text-black focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>

            <button
              type="submit"
              className="flex items-center justify-center gap-3 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md font-semibold w-full"
            >
              <Send size={20} />
              Send Message
            </button>

            {status && (
              <p className="text-green-600 text-center font-medium mt-4">{status}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
