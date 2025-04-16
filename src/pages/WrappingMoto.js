// src/pages/WrappingMoto.js
import React from 'react';
import { Link } from 'react-router-dom';
import './WrappingAuto.css'; // Riutilizziamo lo stesso CSS
import ServiceCard from '../components/ServiceCard';
import { FaMotorcycle, FaShieldAlt, FaPalette, FaTools, FaRocket } from 'react-icons/fa';

const WrappingMoto = () => {
  return (
    <div className="service-page-container">
      <div className="service-hero">
        <div className="service-hero-content">
          <h1>Wrapping Moto</h1>
          <p>
            Trasforma l'aspetto della tua moto con un wrapping professionale e personalizzato.
            Rendi la tua due ruote unica con pellicole di alta qualità e design esclusivi.
          </p>
          <Link to="/contatti" className="btn btn-primary">Richiedi un Preventivo</Link>
        </div>
        <div className="service-hero-image">
          <img src="/wrapping moto.png" alt="Moto Wrapping Professionale" />
        </div>
      </div>

      <div className="service-benefits">
        <div className="section-header">
          <h2>Vantaggi del Wrapping Moto</h2>
          <p>Scopri come il wrapping può valorizzare la tua moto e portare numerosi vantaggi</p>
        </div>

        <div className="service-cards-grid">
          <ServiceCard 
            icon={<FaMotorcycle />}
            title="Personalizza Ogni Dettaglio"
            description="Realizza dettagli e rifiniture che con la verniciatura tradizionale sarebbero difficili e costosi, personalizzando specchietti, parafanghi e codini."
          />
          
          <ServiceCard 
            icon={<FaShieldAlt />}
            title="Protezione della Vernice"
            description="Proteggi le superfici originali della tua moto da graffi e agenti atmosferici mantenendo intatto il valore del tuo veicolo."
          />
          
          <ServiceCard 
            icon={<FaPalette />}
            title="Design Infiniti"
            description="Scegli tra un'ampia gamma di colori e finiture, o crea un design completamente personalizzato per esprimere il tuo stile unico."
          />
          
          <ServiceCard 
            icon={<FaTools />}
            title="Facile Reversibilità"
            description="Cambia look quando vuoi senza danneggiare la verniciatura originale, potendo tornare all'aspetto di fabbrica in qualsiasi momento."
          />
          
          <ServiceCard 
            icon={<FaRocket />}
            title="Aumenta il Valore"
            description="Con una spesa accessibile, il valore della tua moto aumenta e in caso di vendita potrai realizzare più di quanto è il valore dell'usato."
          />
        </div>
      </div>

      <div className="service-process">
        <div className="section-header">
          <h2>Come Lavoriamo</h2>
          <p>Il nostro processo per trasformare la tua moto</p>
        </div>

        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3>Consulenza Iniziale</h3>
            <p>Definiamo insieme il look ideale per la tua moto, analizzando esigenze e possibilità</p>
          </div>
          
          <div className="process-step">
            <div className="step-number">2</div>
            <h3>Preparazione della Moto</h3>
            <p>Pulizia approfondita e preparazione delle superfici per una perfetta applicazione</p>
          </div>
          
          <div className="process-step">
            <div className="step-number">3</div>
            <h3>Wrapping Professionale</h3>
            <p>Applicazione delle pellicole con tecniche avanzate per adattarsi perfettamente alle forme</p>
          </div>
          
          <div className="process-step">
            <div className="step-number">4</div>
            <h3>Rifinitura e Consegna</h3>
            <p>Controllo qualità e consegna della tua moto completamente trasformata</p>
          </div>
        </div>
      </div>

      <div className="service-gallery">
        <div className="section-header">
          <h2>La Nostra Galleria</h2>
          <p>Scopri alcuni dei nostri migliori progetti di wrapping moto</p>
        </div>

        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="/wrapping moto/3.jpg" alt="Moto Wrapping Sportiva" />
          </div>
          <div className="gallery-item">
            <img src="/wrapping moto/5.jpg" alt="Moto Wrapping Custom" />
          </div>
          <div className="gallery-item">
            <img src="/wrapping moto/7.jpg" alt="Moto Wrapping Dettagli" />
          </div>
          <div className="gallery-item">
            <img src="/wrapping moto/9.jpg" alt="Moto Wrapping Completo" />
          </div>
        </div>
      </div>

      <div className="service-cta">
        <h2>La tua moto merita il meglio</h2>
        <p>Contattaci oggi stesso per trasformare la tua moto con un wrapping professionale</p>
        <Link to="/contatti" className="btn btn-primary">Contattaci Ora</Link>
      </div>
    </div>
  );
};

export default WrappingMoto;