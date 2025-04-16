import React from 'react';
import './WrappingSnowboard.css'; // Assicurati di creare un file CSS per lo styling

const WrappingSnowboard = () => {
  return (
    <div className="wrapping-snowboard-container">
      <h1>WRAPPING SNOWBOARD</h1>
      <p className="description">
        A te che sei sportivo e ti piace surfare sulla neve o in acqua ora puoi rinnovare il look della tua tavola.
        Con Snow Wrapping si utilizza la particolare tecnica di Wrapping per customizzare tavole da snow, tavole da surf, wake board e qualsiasi altra attrezzatura sportiva.
      </p>

      <div className="card-container">
        <div className="card">
          <h2>🏂 Rinnova il Tuo Look</h2>
          <p>
            Con il Wrapping snowboard puoi dare una nuova vita alla tua tavola, personalizzando ogni aspetto del design 
            con pellicole colorate e grafiche uniche.
          </p>
        </div>

        <div className="card">
          <h2>🎨 Personalizzazione Completa</h2>
          <p>
            Scegli tra una vasta gamma di colori e finiture, oppure crea una grafica completamente personalizzata 
            per distinguerti sulla neve o in acqua.
          </p>
        </div>

        <div className="card">
          <h2>💎 Valorizza la Tua Attrezzatura</h2>
          <p>
            Con un investimento accessibile, puoi aumentare il valore della tua tavola. In caso di vendita, la personalizzazione 
            potrebbe rendere la tua attrezzatura più desiderabile e quindi più redditizia.
          </p>
        </div>

        <div className="card">
          <h2>🛠️ Attrezzatura Sportiva</h2>
          <p>
            Non solo tavole da snowboard, ma anche tavole da surf, wakeboard e altre attrezzature possono essere personalizzate 
            con la nostra tecnica di wrapping.
          </p>
        </div>

        <div className="card">
          <h2>💬 Contattaci</h2>
          <p>
            Hai già il tuo design in mente? Facci sapere qual è il look che hai pensato per il tuo snow wrapping o wrapping board 
            e insieme realizzeremo il tuo progetto grafico.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WrappingSnowboard;
