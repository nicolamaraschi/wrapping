import React from 'react';
import './GaranzieCondizioni.css'; // Assicurati di creare un file CSS per lo styling

const cardsData = [
  {
    title: 'Preventivi e Validità',
    content: 'I preventivi sono indicativi, IVA esclusa e basati su materiale colore pastello. Validità: 30 giorni. Spese e oneri doganali a carico del committente.',
  },
  {
    title: 'Garanzia del Materiale e Posa',
    content: 'Garanzia del materiale varia da 1/2 anno (Chrome) fino a 8 anni. La garanzia sulla posa è valida solo presso i nostri laboratori. Esclusi costi accessori come trasferte e vitto.',
  },
  {
    title: 'Marchi e Materiali',
    content: 'Fornitori: 3M, Avery, APA, Arlon, Oracal, ImagePerfect, Hexis, SolarScreen, ecc. Per vetri oscurati e sicurezza, utilizziamo SolarScreen, APA, 3M o Avhil certificati (minimo 5/10 anni).',
  },
  {
    title: 'Sostituzioni e Limitazioni',
    content: 'Per esigenze di approvvigionamento o nuove tecnologie, i prodotti scelti possono essere sostituiti con altra marca/modello avente le stesse garanzie e certificazioni. Garanzia ridotta per Taxi a 2 mesi.',
  },
  {
    title: 'Pellicola Protettiva PPF',
    content: 'Utilizziamo preferibilmente 3M VentureShield/3M Scotchgard Pro Serie 200. Attenzione: la pellicola in policarbonato non è conformabile e può rendere visibili i bordi sui colori chiari.',
  },
  {
    title: 'Preparazione del Veicolo',
    content: 'Il veicolo deve essere pulito, sgrassato e privo di graffi. Mancanza di queste condizioni può interrompere la lavorazione con fatturazione delle spese e penali.',
  },
  {
    title: 'Condizioni di Lavoro e Ritardi',
    content: 'Eventuali ritardi dovuti a meteo avverso o altri fattori non sono responsabilità nostra. Ore di inattività saranno fatturate, oltre a costi aggiuntivi se necessari.',
  },
  {
    title: 'Responsabilità e Garanzia',
    content: 'Non siamo responsabili per danni su vernice originale, guarnizioni, o adesivi esistenti. Il cliente deve assicurare il veicolo contro furti e avere l’interno libero da oggetti.',
  },
  {
    title: 'Acconti e Pagamenti',
    content: 'Richiesto un acconto del 35% (50% per cromato). Pagamento finale a fine lavorazione. Sosta a mezzo pronto non ritirato sarà addebitata.',
  },
  {
    title: 'Utilizzo e Trattamento dei Dati',
    content: 'Con la conferma alla lavorazione, il cliente autorizza l’utilizzo e il trattamento dei dati personali e la pubblicazione di foto a scopo pubblicitario.',
  },
  {
    title: 'Normativa Codice Della Strada',
    content: 'Non è previsto l’aggiornamento della carta di circolazione italiana in caso di cambio colore del veicolo. Non ci sono limiti specifici di colore della carrozzeria.',
  },
];

const Card = ({ title, content }) => (
  <div className="garanzia-card">
    <h3 className="garanzia-card-title">{title}</h3>
    <p className="garanzia-card-content">{content}</p>
  </div>
);

const GaranziaCondizioni = () => (
  <div className="garanzia-cards-container">
    {cardsData.map((card, index) => (
      <Card key={index} title={card.title} content={card.content} />
    ))}
  </div>
);

export default GaranziaCondizioni;
