// App.js aggiornato
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PreventivatoreDiWrapping from './components/PreventivatoreDiWrapping';
import CoseIlWrapping from './pages/CoseIlWrapping';
import WrappingAuto from './pages/WrappingAuto';
import WrappingMoto from './pages/WrappingMoto';
import WrappingNautico from './pages/WrappingNautico';
import WrappingDesign from './pages/WrappingDesign';
import WrappingSnowboard from './pages/WrappingSnowboard';
import GaranzieCondizioni from './pages/GaranzieCondizioni';
import Contatti from './pages/Contatti';
import './App.css';

// Componente per scorrere in cima quando si cambia pagina
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<CoseIlWrapping />} />
          <Route path="/auto" element={<WrappingAuto />} />
          <Route path="/moto" element={<WrappingMoto />} />
          <Route path="/nautico" element={<WrappingNautico />} />
          <Route path="/design" element={<WrappingDesign />} />
          <Route path="/snowboard" element={<WrappingSnowboard />} />
          <Route path="/garanzie-condizioni" element={<GaranzieCondizioni />} />
          <Route path="/preventivo" element={<PreventivatoreDiWrapping />} />
          <Route path="/contatti" element={<Contatti />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;