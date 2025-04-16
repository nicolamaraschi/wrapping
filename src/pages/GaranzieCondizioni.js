// src/pages/GaranzieCondizioni.js
import React from 'react';
import './GaranzieCondizioni.css'; 
import { Link } from 'react-router-dom';
import { FaCheck, FaInfoCircle, FaFileContract, FaShieldAlt, FaTags, FaTools, FaCloudSun, FaClock, FaExclamationTriangle, FaUserShield, FaRoad } from 'react-icons/fa';

const cardsData = [
  {
    title: 'Preventivi e Validità',
    content: `I preventivi sono indicativi, IVA esclusa e basati su materiale colore pastello. Validità: 30 giorni. Spese e oneri doganali a carico del committente.`,
    icon: <FaFileContract />
  },
  {
    title: 'Garanzia del Materiale e Posa',
    content: `Garanzia del materiale varia da 1/2 anno (Chrome) fino a 8 anni. La garanzia sulla posa è valida solo presso i nostri laboratori. Esclusi costi accessori come trasferte e vitto.`,
    icon: <FaShieldAlt />
  },
  {
    title: 'Marchi e Materiali',
    content: `Fornitori: 3M, Avery, APA, Arlon, Oracal, ImagePerfect, Hexis, SolarScreen, ecc. Per vetri oscurati e sicurezza, utilizziamo SolarScreen, APA, 3M o Avhil certificati (minimo 5/10 anni).`,
    icon: <FaTags />
  },
  {
    title: 'Sostituzioni e Limitazioni',
    content: `Per esigenze di approvvigionamento o nuove tecnologie, i prodotti scelti possono essere sostituiti con altra marca/modello avente le stesse garanzie e certificazioni. Garanzia ridotta per Taxi a 2 mesi.`,
    icon: <FaInfoCircle />
  },
  {
    title: 'Pellicola Protettiva PPF',
    content: `Utilizziamo preferibilmente 3M VentureShield/3M Scotchgard Pro Serie 200. Attenzione: la pellicola in policarbonato non è conformabile e può rendere visibili i bordi sui colori chiari.`,
    icon: <FaShieldAlt />
  },
  {
    title: 'Preparazione del Veicolo',
    content: `Il veicolo deve essere pulito, sgrassato e privo di graffi. Mancanza di queste condizioni può interrompere la lavorazione con fatturazione delle spese e penali.`,
    icon: <FaTools />
  },
  {
    title: 'Condizioni di Lavoro e Ritardi',
    content: `Eventuali ritardi dovuti a meteo avverso o altri fattori non sono responsabilità nostra. Ore di inattività saranno fatturate, oltre a costi aggiuntivi se necessari.`,
    icon: <FaCloudSun />
  },
  {
    title: 'Responsabilità e Garanzia',
    content: `Non siamo responsabili per danni su vernice originale, guarnizioni, o adesivi esistenti. Il cliente deve assicurare il veicolo contro furti e avere l'interno libero da oggetti.`,
    icon: <FaExclamationTriangle />
  },
  {
    title: 'Acconti e Pagamenti',
    content: `Richiesto un acconto del 35% (50% per cromato). Pagamento finale a fine lavorazione. Sosta a mezzo pronto non ritirato sarà addebitata.`,
    icon: <FaClock />
  },
  {
    title: 'Utilizzo e Trattamento dei Dati',
    content: `Con la conferma alla lavorazione, il cliente autorizza l'utilizzo e il trattamento dei dati personali e la pubblicazione di foto a scopo pubblicitario.`,
    icon: <FaUserShield />
  },
  {
    title: 'Normativa Codice Della Strada',
    content: `Non è previsto l'aggiornamento della carta di circolazione italiana in caso di cambio colore del veicolo. Non ci sono limiti specifici di colore della carrozzeria.`,
    icon: <FaRoad />
  },
];

const GaranzieCondizioni = () => (
  <div className="garanzie-container">
    <div className="garanzie-header">
      <h1>Garanzie e Condizioni</h1>
      <p>Trasparenza e qualità al centro del nostro servizio</p>
    </div>
    
    <div className="garanzie-content">
      <div className="garanzie-intro">
        <div className="intro-icon">
          <FaCheck />
        </div>
        <div className="intro-text">
          <h2>I nostri standard di qualità</h2>
          <p>
            In Wrapping Italy, ci impegniamo a offrire solo il meglio ai nostri clienti. La trasparenza è fondamentale 
            nel nostro rapporto con voi, per questo abbiamo raccolto in questa pagina tutte le informazioni sulle 
            garanzie e condizioni dei nostri servizi.
          </p>
        </div>
      </div>
      
      <div className="garanzie-cards">
        {cardsData.map((card, index) => (
          <div className="garanzia-card" key={index}>
            <div className="garanzia-card-icon">
              {card.icon}
            </div>
            <h3 className="garanzia-card-title">{card.title}</h3>
            <p className="garanzia-card-content">{card.content}</p>
          </div>
        ))}
      </div>
    </div>
    
    <div className="garanzie-cta">
      <h2>Hai domande sulle nostre garanzie?</h2>
      <p>Contattaci per ricevere informazioni dettagliate sui nostri servizi e le relative garanzie</p>
      <Link to="/contatti" className="btn btn-primary">Contattaci Ora</Link>
    </div>
  </div>
);

export default GaranzieCondizioni;