import React from 'react';
import './WrappingMoto.css';

const WrappingMoto = () => {
  return (
    <div className="wrapping-moto-container">
      <h1>WRAPPING MOTO</h1>
      <p className="description">
        Attraverso il Wrapping moto puoi valorizzare il look della tua moto e ottenere numerosi ulteriori vantaggi!
        <br /><br />
        Il wrapping bike, alternativa alla verniciatura? Non in tutti i casi! Il wrapping moto è per molti motociclisti un’ottima alternativa alla verniciatura, sia dal punto di vista qualitativo, grazie all’ampia scelta dei colori e finiture e, soprattutto, per la possibilità di poter cambiare pellicola e, quindi, ringiovanire il look.
      </p>

      <div className="card-container">
        <div className="card">
          <h2>🚀 Personalizza Ogni Rifinitura</h2>
          <p>
            Grazie al wrapping per moto, hai la possibilità di realizzare dettagli e rifiniture che con la verniciatura tradizionale sarebbero di difficile realizzazione e anche sicuramente più costosi, personalizzando dettagli come specchietti, parafanghi e codini.
          </p>
        </div>

        <div className="card">
          <h2>💰 Valorizza la Tua Moto</h2>
          <p>
            Scegliendo di wrappare la moto, con una spesa assolutamente accessibile, il valore della moto aumenta e, in caso di vendita, hai la possibilità di realizzare più di quanto è il valore dell'usato.
          </p>
        </div>

        <div className="card">
          <h2>🎨 Infinite Opzioni</h2>
          <p>
            Seleziona tra un'ampia gamma di colori e finiture, o crea un design personalizzato per esprimere al meglio il tuo stile unico.
          </p>
        </div>

        <div className="card">
          <h2>🏍️ Hai Già il Tuo Stile?</h2>
          <p>
            Facci sapere qual'è il look che hai pensato per il tuo wrapping moto o il tuo nuovo progetto grafico e insieme lo realizzeremo!
          </p>
        </div>

        <div className="card">
          <h2>💬 Contattaci</h2>
          <p>
            Hai domande o idee specifiche? Contattaci per discutere il tuo progetto e scoprire come possiamo trasformare la tua moto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WrappingMoto;
