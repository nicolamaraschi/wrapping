import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Importa il nuovo Footer
import CoseIlWrapping from './pages/CoseIlWrapping';
import WrappingAuto from './pages/WrappingAuto';
import WrappingMoto from './pages/WrappingMoto';
import WrappingNautico from './pages/WrappingNautico';
import WrappingDesign from './pages/WrappingDesign';
import WrappingSnowboard from './pages/WrappingSnowboard';
import GaranzieCondizioni from './pages/GaranzieCondizioni';
import Contatti from './pages/Contatti';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<CoseIlWrapping />} />
        <Route path="/auto" element={<WrappingAuto />} />
        <Route path="/moto" element={<WrappingMoto />} />
        <Route path="/nautico" element={<WrappingNautico />} />
        <Route path="/design" element={<WrappingDesign />} />
        <Route path="/snowboard" element={<WrappingSnowboard />} />
        <Route path="/garanzie-condizioni" element={<GaranzieCondizioni />} />
        <Route path="/contatti" element={<Contatti />} />
      </Routes>
      <Footer /> {/* Aggiungi il Footer */}
    </Router>
  );
};

export default App;
