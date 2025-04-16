import React from 'react';
import './WrappingAuto.css';

const WrappingAuto = () => {
  return (
    <div className="wrapping-auto-container">
      <h1>WRAPPING AUTO</h1>
      <p className="description">
        Il Wrapping auto ti permette di rinnovare totalmente l'aspetto e il look della tua auto, rendendolo personale ed unico, 
        grazie all'applicazione di una pellicola adesiva sulla carrozzeria e sugli interni.
        <br /><br />
        Puoi rinnovare sia veicoli nuovi che usati con applicazioni complete o parziali, proteggendo la verniciatura e aggiungendo uno stile unico.
      </p>

      <div className="card-container">
        <div className="card">
          <h2>🚗 Rinnova la tua Auto</h2>
          <p>
            Con il Wrapping puoi dare nuova vita alla tua auto, personalizzando ogni parte della carrozzeria con pellicole colorate e 
            disegni unici.
          </p>
        </div>

        <div className="card">
          <h2>🔧 Protezione</h2>
          <p>
            La pellicola adesiva protegge la tua auto dagli agenti atmosferici, graffi e abrasioni, preservando la verniciatura originale.
          </p>
        </div>

        <div className="card">
          <h2>🎨 Infinite Combinazioni</h2>
          <p>
            Scegli tra centinaia di colori e finiture, inclusi effetti materici come carbonio, metallo, legno, o crea la tua grafica personalizzata.
          </p>
        </div>

        <div className="card">
          <h2>🏢 Veicoli Aziendali</h2>
          <p>
            Personalizza il tuo veicolo aziendale con il logo della tua azienda e grafiche promozionali per rafforzare la tua immagine.
          </p>
        </div>

        <div className="card">
          <h2>💬 Contattaci</h2>
          <p>
            Hai già uno stile in mente? Facci sapere come vuoi personalizzare la tua auto e insieme realizzeremo il tuo progetto grafico.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WrappingAuto;
