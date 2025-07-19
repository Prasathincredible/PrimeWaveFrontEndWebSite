import brochure from '../assets/brochure.pdf';

const Home = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url('/background.jpg')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 px-6 w-full max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        {/* Tagline Full Width */}
        <div className="w-full mb-8">
          <p
            className="text-3xl md:text-6xl font-semibold text-white"
            style={{ fontFamily: `'Cinzel', serif` }}
          >
            Delivering Global Quality, Naturally
          </p>
        </div>

        {/* Paragraphs + Button */}
        <div className="w-full md:w-2/3 lg:w-1/2 text-gray-200 text-sm md:text-lg leading-relaxed text-center" style={{ fontFamily: `'Roboto', sans-serif` }}>
          <p className="mb-6">
            At <strong className="text-yellow-400">Primewave International LLP</strong>, we don’t just export products — we engineer reliable, scalable, and sustainable supply chains. As a modern Indian export startup, we fuse domain-specific expertise with digitally optimized trade operations to deliver seamless B2B solutions across textiles, food products, and eco-friendly fertilizers.
          </p>

          <p className="mb-8">
            Whether you’re a procurement team in Europe, a retail brand in the Middle East, or a distributor in Southeast Asia — we offer a compliant, data-backed, and customizable export model that removes friction from international sourcing.
          </p>

          <a
            href="/products"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-md transition duration-300 inline-block"
          >
            Get started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
