import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from './pages/Home.jsx';
import Nosotros from './pages/Nosotros.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Footer from './components/principal/Footer.jsx';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-in-out' });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
