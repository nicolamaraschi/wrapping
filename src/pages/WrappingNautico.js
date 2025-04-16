// src/pages/WrappingNautico.js
import React from 'react';
import { Link } from 'react-router-dom';
import './WrappingAuto.css'; // Riutilizziamo lo stesso CSS
import ServiceCard from '../components/ServiceCard';
import { FaShip, FaShieldAlt, FaSun, FaClock, FaPaintBrush } from 'react-icons/fa';

const WrappingNautico = () => {
  return (
    <div className="service-page-container">
      <div className="service-hero">
        <div className="service-hero-content">
          <h1>Wrapping Nautico</h1>
          <p>
            Trasforma e proteggi la tua imbarcazione con il nostro servizio di wrapping nautico professionale.
            Una soluzione innovativa, economica e di grande impatto estetico.
          </p>
          <Link to="/contatti" className="btn btn-primary">Richiedi un Preventivo</Link>
        </div>
        <div className="service-hero-image">
          <img src="/wrapping barche.png" alt="Nautic Wrapping" />
        </div>
      </div>

      <div className="service-benefits">
        <div className="section-header">
          <h2>Vantaggi del Wrapping Nautico</h2>
          <p>Scopri perché il wrapping è la soluzione ideale per la tua imbarcazione</p>
        </div>

        <div className="service-cards-grid">
          <ServiceCard 
            icon={<FaShip />}
            title="Rinnovo Completo"
            description="Rinnova completamente il look della tua imbarcazione in modo rapido ed economico rispetto alla verniciatura tradizionale."
          />
          
          <ServiceCard 
            icon={<FaShieldAlt />}
            title="Protezione Avanzata"
            description="Proteggi la carena e le superfici della tua imbarcazione dagli agenti atmosferici, acqua salata e raggi UV."
          />
          
          <ServiceCard 
            icon={<FaSun />}
            title="Resistenza ai Raggi UV"
            description="Le pellicole nautiche sono specificamente progettate per resistere all'esposizione prolungata ai raggi solari senza sbiadire."
          />
          
          <ServiceCard 
            icon={<FaClock />}
            title="Tempi di Lavorazione Ridotti"
            description="In pochi giorni la tua imbarcazione sarà pronta, riducendo significativamente i tempi di fermo rispetto alla verniciatura."
          />
          
          <ServiceCard 
            icon={<FaPaintBrush />}
            title="Design Personalizzato"
            description="Crea un look unico per la tua imbarcazione con grafiche, colori e finiture personalizzate impossibili da ottenere con la verniciatura."
          />
        </div>
      </div>

      <div className="service-process">
        <div className="section-header">
          <h2>Il Processo di Wrapping Nautico</h2>
          <p>Come trasformiamo la tua imbarcazione</p>
        </div>

        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3>Valutazione e Progettazione</h3>
            <p>Analizziamo l'imbarcazione e sviluppiamo un progetto personalizzato in base alle tue esigenze</p>
          </div>
          
          <div className="process-step">
            <div className="step-number">2</div>
            <h3>Preparazione delle Superfici</h3>
            <p>Pulizia approfondita e preparazione delle superfici per garantire un'adesione perfetta</p>
          </div>
          
          <div className="process-step">
            <div className="step-number">3</div>
            <h3>Applicazione Professionale</h3>
            <p>Installazione delle pellicole nautiche da parte dei nostri tecnici specializzati</p>
          </div>
          
          <div className="process-step">
            <div className="step-number">4</div>
            <h3>Controllo Qualità</h3>
            <p>Verifica accurata di ogni dettaglio per garantire un risultato impeccabile</p>
          </div>
        </div>
      </div>

      <div className="service-cta">
        <h2>Pronto a trasformare la tua imbarcazione?</h2>
        <p>Contattaci oggi stesso per un preventivo personalizzato e senza impegno</p>
        <Link to="/contatti" className="btn btn-primary">Contattaci Ora</Link>
      </div>
    </div>
  );
};

export default WrappingNautico;