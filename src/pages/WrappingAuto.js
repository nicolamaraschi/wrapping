// src/pages/WrappingAuto.js
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './WrappingAuto.css';
import ServiceCard from '../components/ServiceCard';
import { FaCar, FaShieldAlt, FaPalette, FaBuilding, FaComments, FaPlay } from 'react-icons/fa';
import ReactPlayer from 'react-player';

const WrappingAuto = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="service-page-container">
      <div className="service-hero">
        <div className="service-hero-content">
          <h1>Wrapping Auto</h1>
          <p>
            Rinnova completamente l'aspetto e il look della tua auto con il nostro servizio di wrapping professionale, 
            rendendo il tuo veicolo personale e unico attraverso pellicole di alta qualità.
          </p>
          <Link to="/contatti" className="btn btn-primary">Richiedi un Preventivo</Link>
        </div>
        <div className="service-hero-image">
          <img src="/wrapping auto.png" alt="Auto Wrapping" />
        </div>
      </div>

      // Modifica alla sezione del video in WrappingAuto.js
<section className="video-carousel-section">
  <div className="section-header">
    <h2>Il Processo di Wrapping Auto</h2>
    <p>Guarda come trasformiamo le auto con il nostro servizio di wrapping professionale</p>
  </div>

  <div className="video-carousel-container" style={{ maxWidth: '200px', margin: '0 auto' }}>
    <div className="video-carousel">
      <div 
        className="video-item active" 
        style={{
          position: 'relative',
          boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
          borderRadius: '10px',
          overflow: 'hidden',
          background: '#000',
          // Bordo tricolore
          border: '5px solid transparent',
          borderImage: 'linear-gradient(to right, #006341 33%, white 33%, white 66%, #CD212A 66%) 1',
          paddingTop: '177.78%' // Rapporto 9:16 per video verticali
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <ReactPlayer
            ref={playerRef}
            url={`${process.env.PUBLIC_URL}/video-macchina.mp4`}
            width="100%"
            height="100%"
            playing={isPlaying}
            controls={false}
            onEnded={() => setIsPlaying(false)}
            playsinline
            config={{
              file: {
                attributes: {
                  style: {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }
                }
              }
            }}
          />
        </div>
              
              {!isPlaying && (
                <div 
                  className="video-play-overlay"
                  onClick={togglePlay}
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(0, 0, 0, 0.3)',
                    cursor: 'pointer'
                  }}
                >
                  <div 
                    className="play-button"
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: 'rgba(205, 33, 42, 0.8)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <FaPlay style={{ color: 'white', fontSize: '30px' }} />
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Placeholder per futuri video */}
          <div className="video-thumbnails" style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            marginTop: '20px', 
            gap: '10px' 
          }}>
            <div 
              className={`video-thumb active`} 
              onClick={() => {
                setIsPlaying(false);
              }}
              style={{ 
                width: '100px', 
                height: '60px', 
                borderRadius: '5px', 
                overflow: 'hidden',
                border: '3px solid #CD212A',
                cursor: 'pointer'
              }}
            >
              <img 
                src="/wrapping auto/1.jpg" 
                alt="Video 1" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
          </div>
        </div>
      </section>

      <div className="service-benefits">
        <div className="section-header">
          <h2>Vantaggi del Wrapping Auto</h2>
          <p>Scopri perché il wrapping auto è la scelta ideale per personalizzare e proteggere il tuo veicolo</p>
        </div>

        <div className="service-cards-grid">
          <ServiceCard 
            icon={<FaCar />}
            title="Rinnova la tua Auto"
            description="Con il Wrapping puoi dare nuova vita alla tua auto, personalizzando ogni parte della carrozzeria con pellicole colorate e disegni unici."
          />
          
          <ServiceCard 
            icon={<FaShieldAlt />}
            title="Protezione completa"
            description="La pellicola adesiva protegge la tua auto dagli agenti atmosferici, graffi e abrasioni, preservando la verniciatura originale e il valore del veicolo."
          />
          
          <ServiceCard 
            icon={<FaPalette />}
            title="Infinite Combinazioni"
            description="Scegli tra centinaia di colori e finiture, inclusi effetti materici come carbonio, metallo, legno, o crea la tua grafica personalizzata."
          />
          
          <ServiceCard 
            icon={<FaBuilding />}
            title="Veicoli Aziendali"
            description="Personalizza il tuo veicolo aziendale con il logo della tua azienda e grafiche promozionali per rafforzare la tua immagine sul mercato."
          />
          
          <ServiceCard 
            icon={<FaComments />}
            title="Consulenza Personalizzata"
            description="Il nostro team di esperti ti guiderà nella scelta della soluzione migliore per le tue esigenze, offrendo consulenza tecnica e creativa."
          />
        </div>
      </div>

      <div className="service-process">
        <div className="section-header">
          <h2>Il Nostro Processo</h2>
          <p>Come trasformiamo la tua auto in un capolavoro unico</p>
        </div>

        <div className="process-steps">
          <div className="process-step">
            <div className="step-number" style={{ backgroundColor: '#006341' }}>1</div>
            <h3>Consulenza e Progetto</h3>
            <p>Incontro preliminare per comprendere le tue esigenze e creare un progetto personalizzato</p>
          </div>
          
          <div className="process-step">
            <div className="step-number" style={{ backgroundColor: 'white', color: '#1A1E2A' }}>2</div>
            <h3>Preparazione del Veicolo</h3>
            <p>Pulizia profonda e preparazione della superficie per garantire un'adesione perfetta</p>
          </div>
          
          <div className="process-step">
            <div className="step-number" style={{ backgroundColor: '#CD212A' }}>3</div>
            <h3>Applicazione della Pellicola</h3>
            <p>Installazione professionale da parte dei nostri tecnici specializzati</p>
          </div>
          
          <div className="process-step">
            <div className="step-number" style={{ backgroundColor: '#006341' }}>4</div>
            <h3>Controllo Qualità</h3>
            <p>Verifica accurata del risultato finale per garantire la massima soddisfazione</p>
          </div>
        </div>
      </div>

      <div className="service-gallery">
        <div className="section-header">
          <h2>I Nostri Lavori</h2>
          <p>Alcuni esempi delle nostre realizzazioni di wrapping auto</p>
        </div>

        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="/wrapping auto/4.jpg" alt="Auto Wrapping Sportivo" />
          </div>
          <div className="gallery-item">
            <img src="/wrapping auto/6.jpg" alt="Auto Wrapping Lusso" />
          </div>
          <div className="gallery-item">
            <img src="/wrapping auto/8.jpg" alt="Auto Wrapping Dettaglio" />
          </div>
          <div className="gallery-item">
            <img src="/wrapping auto/10.jpg" alt="Auto Wrapping Completo" />
          </div>
        </div>
      </div>

      <div className="service-cta" style={{ 
        background: 'linear-gradient(135deg, #006341 0%, #CD212A 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="tricolore-overlay" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.05,
          background: 'repeating-linear-gradient(to right, #006341 0px, #006341 33%, white 33%, white 66%, #CD212A 66%, #CD212A 100%)'
        }}></div>
        
        <h2>Pronto a trasformare la tua auto?</h2>
        <p>Contattaci oggi stesso per un preventivo gratuito e senza impegno</p>
        <Link to="/contatti" className="btn btn-primary" style={{ 
          backgroundColor: 'white', 
          color: '#1A1E2A',
          border: '2px solid white'
        }}>Contattaci Ora</Link>
      </div>
    </div>
  );
};

export default WrappingAuto;