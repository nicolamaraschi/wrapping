import React from 'react';
import './CoseIlWrapping.css';

const CoseIlWrapping = () => {
  return (
    <div className="wrapping-container">
      <div className="header">
        <img src="/logo.png" alt="Logo" className="logo" />
        <h1>Che cos'è il Wrapping?</h1>
      </div>

      <div className="card-container">
        <div className="card">
          <img src="/coseWrapping.webp" alt="Cos’è il Wrapping" className="card-image" />
          <h2>📦 Cos’è il Wrapping?</h2>
          <p>
            Il wrapping permette di cambiare colore a veicoli e oggetti utilizzando una pellicola coprente.
            È sicuro e non danneggia la verniciatura originale.
          </p>
        </div>

        <div className="card">
          <img src="/personalizzaWrapping.jpg" alt="Personalizzazione" className="card-image" />
          <h2>🎨 Personalizzazione</h2>
          <p>
            Il wrapping consente di personalizzare il tuo veicolo con pellicole di alta qualità. 
            La protezione è garantita da agenti atmosferici e graffi.
          </p>
        </div>

        <div className="card">
          <img src="/durataWrapping.jpg" alt="Durata" className="card-image" />
          <h2>⏳ Durata</h2>
          <p>
            Resiste ai lavaggi e alle temperature, con una garanzia fino a 3 anni. 
            La pellicola è removibile, lasciando intatta la verniciatura.
          </p>
        </div>

        <div className="card">
          <img src="/costoWrapping.png" alt="Costo" className="card-image" />
          <h2>💰 Costo</h2>
          <p>
            Il wrapping è più economico della verniciatura tradizionale, con molte opzioni 
            di materiali e design unici come CarbonioLook e Camouflage.
          </p>
        </div>

        <div className="card">
          <img src="/convenienzaWrapping.jpg" alt="Convenienza" className="card-image" />
          <h2>🔧 Convenienza</h2>
          <p>
            Il wrapping offre una soluzione duratura e di grande impatto estetico, 
            perfetta per chi cerca stile e protezione a un prezzo contenuto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoseIlWrapping;
