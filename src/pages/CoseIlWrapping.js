import React from 'react';
import './CoseIlWrapping.css';
import { FaShieldAlt, FaPalette, FaClock, FaDollarSign, FaThumbsUp } from 'react-icons/fa';
// Rimozione framer-motion

const CoseIlWrapping = () => {
  return (
    <div className="wrapping-container">
      <section className="hero">
        <div className="hero-content">
          {/* Elementi motion sostituiti con elementi HTML standard */}
          <h1>
            Trasforma il tuo veicolo con il Wrapping
          </h1>
          <p>
            Personalizzazione professionale con pellicole di alta qualità per auto, moto, barche e molto altro
          </p>
          <div className="hero-buttons">
            <a href="/contatti" className="btn btn-primary">Richiedi Preventivo</a>
            <a href="#servizi" className="btn btn-outline">Scopri di Più</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/hero-car-wrapped.jpg" alt="Auto con wrapping professionale" />
        </div>
      </section>

      <section id="servizi" className="what-is-wrapping">
        <div className="section-header">
          <h2>Che cos'è il Wrapping?</h2>
          <p>Una soluzione moderna per personalizzare e proteggere la tua carrozzeria</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <FaShieldAlt />
            </div>
            <h3>Protezione Completa</h3>
            <p>Il wrapping protegge la vernice originale da graffi, agenti atmosferici e raggi UV, preservando il valore del tuo veicolo.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FaPalette />
            </div>
            <h3>Personalizzazione Illimitata</h3>
            <p>Scegli tra centinaia di colori, finiture e texture per creare un look unico che rispecchi la tua personalità.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FaClock />
            </div>
            <h3>Lunga Durata</h3>
            <p>Le nostre pellicole premium resistono fino a 8 anni, mantenendo l'aspetto originale anche in condizioni difficili.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FaDollarSign />
            </div>
            <h3>Costo Efficiente</h3>
            <p>Più economico di una riverniciatura, con la possibilità di tornare all'aspetto originale quando desideri.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FaThumbsUp />
            </div>
            <h3>Versatilità Totale</h3>
            <p>Applicabile su auto, moto, barche, snowboard e superfici di arredamento per un look coordinato e distintivo.</p>
          </div>
        </div>
      </section>

      <section className="gallery">
        <div className="section-header">
          <h2>I Nostri Lavori</h2>
          <p>Una selezione dei nostri migliori progetti di wrapping</p>
        </div>

        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="/gallery/auto-1.jpg" alt="Wrapping Auto" />
            <div className="gallery-overlay">
              <span>Wrapping Auto</span>
            </div>
          </div>
          <div className="gallery-item">
            <img src="/gallery/moto-1.jpg" alt="Wrapping Moto" />
            <div className="gallery-overlay">
              <span>Wrapping Moto</span>
            </div>
          </div>
          <div className="gallery-item">
            <img src="/gallery/nautico-1.jpg" alt="Wrapping Nautico" />
            <div className="gallery-overlay">
              <span>Wrapping Nautico</span>
            </div>
          </div>
        </div>

        <div className="gallery-cta">
          <a href="/contatti" className="btn btn-primary">Contattaci per il tuo progetto</a>
        </div>
      </section>
    </div>
  );
};

export default CoseIlWrapping;