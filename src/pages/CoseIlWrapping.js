// src/pages/CoseIlWrapping.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CoseIlWrapping.css';
import { FaShieldAlt, FaPalette, FaClock, FaDollarSign, FaThumbsUp, FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa';

const CoseIlWrapping = () => {
  // Stato per il carosello
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  
  // Array di immagini per il carosello
  const carouselImages = [
    "/wrapping%20auto/1.jpg",
    "/wrapping%20auto/3.jpg",
    "/wrapping%20auto/5.jpg",
    "/wrapping%20moto/2.jpg",
    "/wrapping%20moto/4.jpg",
    "/wrapping%20moto/7.jpg"
  ];
  
  // Funzioni per il carosello
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };
  
  // Autoplay del carosello
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Cambia slide ogni 5 secondi
    
    return () => clearInterval(interval);
  }, [currentSlide]);
  
  // Gestione modale video
  const openVideoModal = () => {
    setIsVideoModalOpen(true);
    document.body.style.overflow = 'hidden'; // Impedisce lo scroll quando la modale è aperta
  };
  
  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    document.body.style.overflow = 'auto'; // Ripristina lo scroll
  };

  return (
    <div className="wrapping-container">
      <section className="hero">
        <div className="hero-content">
          <h1>
            Trasforma il tuo veicolo con il Wrapping
          </h1>
          <p>
            Personalizzazione professionale con pellicole di alta qualità per auto, moto, barche e molto altro
          </p>
          <div className="hero-buttons">
            <Link to="/contatti" className="btn btn-primary">Richiedi Preventivo</Link>
            <a href="#servizi" className="btn btn-outline">Scopri di Più</a>
          </div>
        </div>
        <div className="hero-video">
          <video autoPlay muted loop playsInline className="hero-bg-video">
            <source src="/video.mp4" type="video/mp4" />
            Il tuo browser non supporta i video HTML5.
          </video>
          <div className="video-overlay"></div>
        </div>
      </section>

      {/* Sezione Video Presentazione */}
      <section className="video-section">
        <div className="section-header">
          <h2>Scopri il Mondo del Wrapping</h2>
          <p>Guarda il nostro video di presentazione e lasciati ispirare dalle infinite possibilità</p>
        </div>
        
        <div className="video-container">
          <div className="video-preview" onClick={openVideoModal}>
            <img src="/wrapping%20auto/2.jpg" alt="Anteprima video wrapping" />
            <div className="play-button">
              <FaPlay />
            </div>
            <div className="video-overlay">
              <span>Scopri il processo di wrapping professionale</span>
            </div>
          </div>
        </div>
        
        {/* Modale video */}
        {isVideoModalOpen && (
          <div className="video-modal">
            <div className="modal-overlay" onClick={closeVideoModal}></div>
            <div className="modal-content">
              <button className="close-modal" onClick={closeVideoModal}>×</button>
              <div className="video-wrapper">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/v92b9s5hb8I?autoplay=1" 
                  title="Video Wrapping Professionale" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Carosello Immagini */}
      <section className="carousel-section">
        <div className="carousel-container">
          <button className="carousel-arrow prev-arrow" onClick={prevSlide}>
            <FaChevronLeft />
          </button>
          
          <div className="carousel-slides">
            {carouselImages.map((img, index) => (
              <div 
                key={index} 
                className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                style={{ 
                  transform: `translateX(${(index - currentSlide) * 100}%)`,
                }}
              >
                <img 
                  src={img} 
                  alt={`Slide ${index + 1}`} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  onError={(e) => {
                    console.error(`Cannot load image: ${img}`);
                    e.target.src = '/placeholder.jpg'; // Una immagine placeholder
                  }}
                />
                <div className="carousel-caption">
                  <h3>Wrapping Professionale</h3>
                  <p>Trasforma il tuo veicolo con un look unico</p>
                </div>
              </div>
            ))}
          </div>
          
          <button className="carousel-arrow next-arrow" onClick={nextSlide}>
            <FaChevronRight />
          </button>
          
          <div className="carousel-indicators">
            {carouselImages.map((_, index) => (
              <button 
                key={index} 
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))}
          </div>
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
            <img src="/wrapping%20auto/3.jpg" alt="Wrapping Auto" />
            <div className="gallery-overlay">
              <span>Wrapping Auto</span>
            </div>
          </div>
          <div className="gallery-item">
            <img src="/wrapping%20moto/2.jpg" alt="Wrapping Moto" />
            <div className="gallery-overlay">
              <span>Wrapping Moto</span>
            </div>
          </div>
          <div className="gallery-item">
            <img src="/wrapping%20auto/5.jpg" alt="Wrapping Personalizzato" />
            <div className="gallery-overlay">
              <span>Wrapping Personalizzato</span>
            </div>
          </div>
        </div>

        <div className="gallery-cta">
          <Link to="/contatti" className="btn btn-primary">Contattaci per il tuo progetto</Link>
        </div>
      </section>
    </div>
  );
};

export default CoseIlWrapping;