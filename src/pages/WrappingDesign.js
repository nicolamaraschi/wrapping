// src/pages/WrappingDesign.js
import React from 'react';
import { Link } from 'react-router-dom';
import './WrappingAuto.css'; // Riutilizziamo lo stesso CSS
import ServiceCard from '../components/ServiceCard';
import { FaPaintBrush, FaClock, FaLightbulb, FaStore, FaChartLine } from 'react-icons/fa';

const WrappingDesign = () => {
  // Array di immagini per la galleria
  const galleryImages = [
    "/wrapping design/1.jpg",
    "/wrapping design/2.jpg",
    "/wrapping design/3.jpg",
    "/wrapping design/4.jpg",
    "/wrapping design/5.jpg",
    "/wrapping design/6.jpg",
    "/wrapping design/7.jpg",
    "/wrapping design/8.jpg"
  ];

  return (
    <div className="service-page-container">
      <div className="service-hero">
        <div className="service-hero-content">
          <h1>Wrapping Design</h1>
          <p>
            Una tecnica di decorazione innovativa che utilizza pellicole polimeriche elastiche
            adattabili a qualsiasi superficie e forma, per rinnovare ambienti e oggetti di design.
          </p>
          <Link to="/contatti" className="btn btn-primary">Richiedi un Preventivo</Link>
        </div>
        <div className="service-hero-image">
          <img src="/wrapping design.png" alt="Design Wrapping" />
        </div>
      </div>

      <div className="service-benefits">
        <div className="section-header">
          <h2>Vantaggi del Wrapping Design</h2>
          <p>Scopri perché il wrapping è la soluzione ideale per rinnovare i tuoi spazi</p>
        </div>

        <div className="service-cards-grid">
          <ServiceCard 
            icon={<FaPaintBrush />}
            title="Personalizzazione Unica"
            description="Le pellicole polimeriche si adattano a qualsiasi superficie, offrendo infinite possibilità di decorazione e personalizzazione per oggetti e ambienti."
          />
          
          <ServiceCard 
            icon={<FaClock />}
            title="Tempi di Lavorazione Ridotti"
            description="Grazie alla rapidità della tecnica, il wrapping design consente di completare i lavori in tempi molto brevi senza interrompere le attività quotidiane."
          />
          
          <ServiceCard 
            icon={<FaLightbulb />}
            title="Versatilità Estrema"
            description="Applicabile su mobili, pareti, complementi d'arredo, elettrodomestici e qualsiasi altra superficie per un restyling completo."
          />
          
          <ServiceCard 
            icon={<FaStore />}
            title="Ideale per Attività Commerciali"
            description="Rinnova l'aspetto del tuo negozio o attività senza periodi di chiusura, trasformando spazi commerciali con investimenti contenuti."
          />
          
          <ServiceCard 
            icon={<FaChartLine />}
            title="Economicità"
            description="Il wrapping design è una soluzione economica rispetto ad altre tecniche di decorazione e ristrutturazione, con risultati di grande impatto."
          />
        </div>
      </div>

      <div className="service-process">
        <div className="section-header">
          <h2>Il Nostro Processo</h2>
          <p>Come trasformiamo i tuoi spazi con il wrapping design</p>
        </div>

        <div className="process-steps">
          <div className="process-step">
            <div className="step-number" style={{ backgroundColor: '#006341' }}>1</div>
            <h3>Consulenza e Progettazione</h3>
            <p>Analizziamo gli spazi e creiamo insieme un progetto su misura per le tue esigenze</p>
          </div>
          
          <div className="process-step">
            <div className="step-number" style={{ backgroundColor: 'white', color: '#1A1E2A' }}>2</div>
            <h3>Preparazione delle Superfici</h3>
            <p>Pulizia accurata e preparazione per garantire un'adesione perfetta della pellicola</p>
          </div>
          
          <div className="process-step">
            <div className="step-number" style={{ backgroundColor: '#CD212A' }}>3</div>
            <h3>Applicazione Professionale</h3>
            <p>Utilizzo di tecniche specializzate per adattare perfettamente le pellicole alle superfici</p>
          </div>
          
          <div className="process-step">
            <div className="step-number" style={{ backgroundColor: '#006341' }}>4</div>
            <h3>Controllo Qualità</h3>
            <p>Verifica accurata del risultato finale per garantire una trasformazione impeccabile</p>
          </div>
        </div>
      </div>

      <div className="gallery-section" style={{ padding: '80px 0', backgroundColor: '#f5f5f5' }}>
        <div className="section-header">
          <h2>I Nostri Progetti di Design</h2>
          <p>Scopri le nostre realizzazioni di wrapping design per interni ed oggetti</p>
        </div>

        <div className="design-gallery-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '20px',
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 30px'
        }}>
          {galleryImages.map((img, index) => (
            <div 
              key={index}
              className="design-gallery-item"
              style={{
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                position: 'relative',
                height: '300px',
                border: index % 3 === 0 ? '3px solid #006341' : 
                       index % 3 === 1 ? '3px solid #FFFFFF' : '3px solid #CD212A',
              }}
            >
              <img 
                src={img} 
                alt={`Design Wrapping Esempio ${index + 1}`} 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }}
                onError={(e) => {
                  console.error(`Cannot load image: ${img}`);
                  e.target.style.display = 'none';
                }}
              />
              <div 
                className="design-gallery-overlay"
                style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  right: '0',
                  padding: '15px',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
                  color: 'white',
                  transform: 'translateY(100%)',
                  transition: 'transform 0.3s ease'
                }}
              >
                <h3 style={{ marginBottom: '5px' }}>Wrapping Design</h3>
                <p style={{ margin: '0' }}>Personalizzazione di interni e superfici</p>
              </div>
            </div>
          ))}
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
        
        <h2>Pronto a trasformare i tuoi spazi?</h2>
        <p>Contattaci oggi stesso per un preventivo personalizzato e senza impegno</p>
        <Link to="/contatti" className="btn btn-primary" style={{ 
          backgroundColor: 'white', 
          color: '#1A1E2A',
          border: '2px solid white'
        }}>Contattaci Ora</Link>
      </div>
    </div>
  );
};

export default WrappingDesign;