import React from 'react';
import './WrappingDesign.css';

const WrappingDesign = () => {
  return (
    <div className="wrapping-design-container">
      <h1>WRAPPING DESIGN</h1>
      <p className="description">
        Cos'è il Wrapping Design? Il wrapping design è una particolare tecnica di decorazione che utilizza pellicole polimeriche di particolare elasticità che si adattano con il calore a qualsiasi superficie e a qualunque tipologia di forma.
        <br /><br />
        I vantaggi eccezionali di questa tecnica sono:
        <ul>
          <li>Ridotti tempi di lavorazione</li>
          <li>Economicità della spesa</li>
          <li>Molteplici possibilità di decorazioni e personalizzazioni</li>
          <li>Per le attività o negozi non è richiesto periodo di chiusura</li>
        </ul>
        Guarda alcuni dei nostri lavori di Wrapping Design...
      </p>

      <div className="card-container">
        <div className="card">
          <h2>🎨 Personalizzazione Unica</h2>
          <p>
            Le pellicole polimeriche si adattano a qualsiasi superficie, offrendo infinite possibilità di decorazione e personalizzazione.
          </p>
        </div>

        <div className="card">
          <h2>⏱️ Tempi di Lavorazione Ridotti</h2>
          <p>
            Grazie alla rapidità della tecnica, il wrapping design consente di completare i lavori in tempi molto brevi.
          </p>
        </div>

        <div className="card">
          <h2>💸 Economicità</h2>
          <p>
            Il wrapping design è una soluzione economica rispetto ad altre tecniche di decorazione e personalizzazione.
          </p>
        </div>

        <div className="card">
          <h2>🏢 Adatto per Attività e Negozi</h2>
          <p>
            Non è necessario chiudere l'attività o il negozio durante il processo di decorazione, permettendo di continuare le normali operazioni.
          </p>
        </div>

        <div className="card">
          <h2>💬 Contattaci</h2>
          <p>
            Hai già il tuo design in mente? Facci sapere qual è il look che hai pensato per il tuo wrapping design o il tuo nuovo progetto grafico e insieme lo realizzeremo!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WrappingDesign;
