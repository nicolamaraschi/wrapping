// WrappingAuto.js aggiornato
import React from 'react';
import './WrappingAuto.css';
import ServiceCard from '../components/ServiceCard';
import { FaCar, FaShieldAlt, FaPalette, FaBuilding, FaComments } from 'react-icons/fa';

const WrappingAuto = () => {
  return (
    <div className="service-page-container">
      <div className="service-hero">
        <div className="service-hero-content">
          <h1>Wrapping Auto</h1>
          <p>
            Rinnova completamente l'aspetto e il look della tua auto con il nostro servizio di wrapping professionale, 
            rendendo il tuo veicolo personale e unico attraverso pellicole di alta qualità.
          </p>
          <a href="/contatti" className="btn btn-primary">Richiedi un Preventivo</a>
        </div>
        <div className="service-hero-image">
          <img src="/services/auto-wrapping-hero.jpg" alt="Auto Wrapping" />
        </div>
      </div>

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
            <div className="step-number">1</div>
            <h3>Consulenza e Progetto</h3>
            <p>Incontro preliminare per comprendere le tue esigenze e creare un progetto personalizzato</p>
          </div>
          
          <div className="process-step">
            <div className="step-number">2</div>
            <h3>Preparazione del Veicolo</h3>
            <p>Pulizia profonda e preparazione della superficie per garantire un'adesione perfetta</p>
          </div>
          
          <div className="process-step">
            <div className="step-number">3</div>
            <h3>Applicazione della Pellicola</h3>
            <p>Installazione professionale da parte dei nostri tecnici specializzati</p>
          </div>
          
          <div className="process-step">
            <div className="step-number">4</div>
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
            <img src="/gallery/auto-1.jpg" alt="Auto Wrapping" />
          </div>
          <div className="gallery-item">
            <img src="/gallery/auto-2.jpg" alt="Auto Wrapping" />
          </div>
          <div className="gallery-item">
            <img src="/gallery/auto-3.jpg" alt="Auto Wrapping" />
          </div>
          <div className="gallery-item">
            <img src="/gallery/auto-4.jpg" alt="Auto Wrapping" />
          </div>
        </div>
      </div>

      <div className="service-cta">
        <h2>Pronto a trasformare la tua auto?</h2>
        <p>Contattaci oggi stesso per un preventivo gratuito e senza impegno</p>
        <a href="/contatti" className="btn btn-primary">Contattaci Ora</a>
      </div>
    </div>
  );
};

export default WrappingAuto;