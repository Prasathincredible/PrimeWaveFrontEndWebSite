import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import Contact from './Components/Contact';
import TextilesGoods from './Components/TextilesGoods';
import AgroCommodities from './Components/AgroCommodities';
import OrganicFertilizers from './Components/OrganicFertilizers';
import Layout from './Components/Layout';

function App() {
  return (
    <div className="App w-full h-full p-0 m-0">
      <Routes>
        {/* Apply Layout to all routes */}
        <Route path="/*" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Product />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products/textiles-goods" element={<TextilesGoods />} />
          <Route path="products/agro-commodities" element={<AgroCommodities />} />
          <Route path="products/organic-fertilizers" element={<OrganicFertilizers />} />
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
