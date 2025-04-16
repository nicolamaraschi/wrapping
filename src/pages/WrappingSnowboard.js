// src/pages/WrappingSnowboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './WrappingAuto.css'; // Riutilizziamo lo stesso CSS
import ServiceCard from '../components/ServiceCard';
import { FaSnowboarding, FaPaintBrush, FaShieldAlt, FaRegHeart, FaStar } from 'react-icons/fa';

const WrappingSnowboard = () => {
  return (
    <div className="service-page-container">
      <div className="service-hero">
        <div className="service-hero-content">
          <h1>Wrapping Snowboard</h1>
          <p>
            A te che sei sportivo e ti piace surfare sulla neve o in acqua, ora puoi rinnovare il look della tua tavola con 
            il nostro servizio di wrapping professionale.
          </p>
          <Link to="/contatti" className="btn btn-primary">Richiedi un Preventivo</Link>
        </div>
        <div className="service-hero-image">
          <img src="/wrapping snowboard.png" alt="Snowboard Wrapping" />
        </div>
      </div>

      <div className="service-benefits">
        <div className="section-header">
          <h2>Vantaggi del Wrapping Snowboard</h2>
          <p>Scopri come personalizzare la tua attrezzatura sportiva</p>
        </div>

        <div className="service-cards-grid">
          <ServiceCard 
            icon={<FaSnowboarding />}
            title="Rinnova il Tuo Look"
            description="Con il Wrapping snowboard puoi dare una nuova vita alla tua tavola, personalizzando ogni aspetto del design con pellicole colorate e grafiche uniche."
          />
          
          <ServiceCard 
            icon={<FaPaintBrush />}
            title="Personalizzazione Completa"
            description="Scegli tra una vasta gamma di colori e finiture, oppure crea una grafica completamente personalizzata per distinguerti sulla neve o in acqua."
          />
          
          <ServiceCard 
            icon={<FaShieldAlt />}
            title="Protezione Extra"
            description="Oltre all'aspetto estetico, le nostre pellicole garantiscono una protezione aggiuntiva contro urti, graffi e agenti atmosferici."
          />
          
          <ServiceCard 
            icon={<FaRegHeart />}
            title="Valorizza la Tua Attrezzatura"
            description="Con un investimento accessibile, puoi aumentare il valore della tua tavola e renderla più desiderabile in caso di vendita."
          />
          
          <ServiceCard 
            icon={<FaStar />}
            title="Versatilità Totale"
            description="Non solo tavole da snowboard, ma anche tavole da surf, wakeboard e altre attrezzature possono essere personalizzate con la nostra tecnica di wrapping."
          />
        </div>
      </div>

      <div className="service-process" style={{ 
        background: 'linear-gradient(135deg, rgba(0,99,65,0.9) 0%, rgba(26,30,42,0.9) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="tricolore-stripe" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '6px',
          background: 'linear-gradient(to right, #006341 33%, white 33%, white 66%, #CD212A 66%)'
        }}></div>
        
        <div className="section-header">
          <h2>Il Nostro Processo</h2>
          <p>Come personalizziamo la tua attrezzatura sportiva</p>
        </div>

        <div className="process-steps">
          <div className="process-step">
            <div className="step-number" style={{ backgroundColor: '#006341' }}>1</div>
            <h3>Design e Progettazione</h3>
            <p>Lavoriamo insieme per creare un design unico che rispecchi il tuo stile personale</p>
          </div>
          
          <div className="process-step">
            <div className="step-number" style={{ backgroundColor: 'white', color: '#1A1E2A' }}>2</div>
            <h3>Preparazione della Tavola</h3>
            <p>Pulizia accurata e preparazione della superficie per garantire la perfetta adesione della pellicola</p>
          </div>
          
          <div className="process-step">
            <div className="step-number" style={{ backgroundColor: '#CD212A' }}>3</div>
            <h3>Applicazione Professionale</h3>
            <p>Utilizzo di tecniche specializzate per un'applicazione precisa e duratura del wrapping</p>
          </div>
          
          <div className="process-step">
            <div className="step-number" style={{ backgroundColor: '#006341' }}>4</div>
            <h3>Finitura e Protezione</h3>
            <p>Applicazione di una finitura protettiva per garantire resistenza in condizioni estreme</p>
          </div>
        </div>
        
        <div className="tricolore-stripe" style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '6px',
          background: 'linear-gradient(to right, #006341 33%, white 33%, white 66%, #CD212A 66%)'
        }}></div>
      </div>

      <div className="italian-gallery" style={{ padding: '80px 0', backgroundColor: '#f5f5f5' }}>
        <div className="section-header">
          <h2>La Nostra Galleria</h2>
          <p>Alcuni esempi delle nostre personalizzazioni più apprezzate</p>
        </div>

        <div className="gallery-container" style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '20px',
          padding: '0 20px'
        }}>
          <div className="gallery-item-italian" style={{
            height: '250px',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            position: 'relative',
            border: '3px solid #006341' // Verde
          }}>
            <div style={{ height: '100%', backgroundColor: '#ddd' }}>
              <div style={{ 
                position: 'absolute', 
                bottom: '0', 
                left: '0', 
                right: '0',
                padding: '15px',
                background: 'rgba(0,99,65,0.8)',
                color: 'white'
              }}>
                <h3>Design Sportivo</h3>
                <p>Wrapping per snowboard e tavole da surf</p>
              </div>
            </div>
          </div>
          
          <div className="gallery-item-italian" style={{
            height: '250px',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            position: 'relative',
            border: '3px solid #fff' // Bianco
          }}>
            <div style={{ height: '100%', backgroundColor: '#ddd' }}>
              <div style={{ 
                position: 'absolute', 
                bottom: '0', 
                left: '0', 
                right: '0',
                padding: '15px',
                background: 'rgba(255,255,255,0.8)',
                color: '#1A1E2A'
              }}>
                <h3>Personalizzazione Artistica</h3>
                <p>Grafiche esclusive per la tua tavola</p>
              </div>
            </div>
          </div>
          
          <div className="gallery-item-italian" style={{
            height: '250px',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            position: 'relative',
            border: '3px solid #CD212A' // Rosso
          }}>
            <div style={{ height: '100%', backgroundColor: '#ddd' }}>
              <div style={{ 
                position: 'absolute', 
                bottom: '0', 
                left: '0', 
                right: '0',
                padding: '15px',
                background: 'rgba(205,33,42,0.8)',
                color: 'white'
              }}>
                <h3>Look Professionale</h3>
                <p>Wrapping per attrezzature sportive professionali</p>
              </div>
            </div>
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
        
        <h2>Pronto a personalizzare la tua tavola?</h2>
        <p>Contattaci oggi stesso per trasformare la tua attrezzatura con un wrapping professionale</p>
        <Link to="/contatti" className="btn btn-primary" style={{ 
          backgroundColor: 'white', 
          color: '#1A1E2A',
          border: '2px solid white'
        }}>Contattaci Ora</Link>
      </div>
    </div>
  );
};

export default WrappingSnowboard;