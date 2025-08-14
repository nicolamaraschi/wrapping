import React, { useState, useEffect } from 'react';
import './PreventivatoreDiWrapping.css';
import { FaArrowRight, FaArrowLeft, FaEnvelope, FaPhone, FaUser, FaStickyNote, FaRedo } from 'react-icons/fa';
import { GiWrappedSweet } from 'react-icons/gi'; // Icona simpatica per "Wrapping"
import { MdAttachMoney } from 'react-icons/md';  // Icona per i soldi

const PreventivatoreDiWrapping = () => {
  // Stato per gestire il form e i risultati
  const [formData, setFormData] = useState({
    categoria: '',
    modello: '',
    anno: '',
    tipoPellicola: '',
    superficieDaCoprire: '',
    complessità: 'media',
    dettagliAggiuntivi: '',
    nome: '',
    email: '',
    telefono: '',
  });
  const [preventivo, setPreventivo] = useState(null);
  const [step, setStep] = useState(1);

  // Catalogo dei prezzi base (€/m²) per tipo di pellicola
  const prezziPellicole = {
    'base': 60,
    'opaca': 70,
    'lucida': 65,
    'metallizzata': 80,
    'cangiante': 95,
    'carbonio': 100,
    'premium': 120,
  };

  // Coefficienti di complessità per categoria
  const coefficientiCategoria = {
    'auto': 1,
    'moto': 0.8,
    'snowboard': 0.5,
    'barca': 1.3,
    'altro': 1.1,
  };

  // Superfici medie approssimative in m² per categoria
  const superficiMedie = {
    'auto': {
      'completo': 12,
      'parziale': 5,
      'dettagli': 2,
    },
    'moto': {
      'completo': 4,
      'parziale': 2,
      'dettagli': 0.5,
    },
    'snowboard': {
      'completo': 1.5,
      'parziale': 0.8, 
      'dettagli': 0.3,
    },
    'barca': {
      'completo': 25,
      'parziale': 10,
      'dettagli': 3,
    },
    'altro': {
      'completo': 8,
      'parziale': 4,
      'dettagli': 1,
    },
  };

  // Coefficienti per complessità
  const coefficientiComplessità = {
    'bassa': 0.8,
    'media': 1,
    'alta': 1.3,
  };

  // Percorsi immagini
  const immaginiCategorie = {
    'auto': '/wrapping auto.png',
    'moto': '/wrapping moto.png',
    'snowboard': '/wrapping snowboard.png',
    'barca': '/wrapping barche.png',
    'altro': '/wrapping design.png',
  };

  // Gestione del cambio input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Gestione dell'avanzamento del form
  const nextStep = () => {
    if (validateCurrentStep()) {
      setStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  // Validazione semplice per step corrente
  const validateCurrentStep = () => {
    if (step === 1 && !formData.categoria) return false;
    if (step === 2 && !formData.tipoPellicola) return false;
    if (step === 3 && !formData.superficieDaCoprire) return false;
    return true;
  };

  // Calcolo del preventivo
  const calcolaPreventivo = () => {
    const prezzoPellicola = prezziPellicole[formData.tipoPellicola] || prezziPellicole.base;
    const coeffCategoria = coefficientiCategoria[formData.categoria] || coefficientiCategoria.altro;
    const coeffComplessità = coefficientiComplessità[formData.complessità];
    
    let superficie = 0;
    if (formData.superficieDaCoprire === 'personalizzato' && formData.superficiePersonalizzata) {
      superficie = parseFloat(formData.superficiePersonalizzata);
    } else {
      superficie = superficiMedie[formData.categoria]?.[formData.superficieDaCoprire] || 5;
    }
    
    // Formula di calcolo
    const costoBase = prezzoPellicola * superficie;
    const costoFinale = costoBase * coeffCategoria * coeffComplessità;
    
    // Aggiungi variazione del 10% per dare un range
    const minCost = Math.round(costoFinale * 0.9);
    const maxCost = Math.round(costoFinale * 1.1);
    
    setPreventivo({
      minCost,
      maxCost,
      superficie,
      dettagli: {
        categoria: formData.categoria,
        modello: formData.modello,
        pellicola: formData.tipoPellicola,
        superficie: `${superficie} m²`,
        complessità: formData.complessità
      }
    });
    
    setStep(5); // Vai allo step di riepilogo
  };

  // Gestione invio form
  const handleSubmit = (e) => {
    e.preventDefault();
    calcolaPreventivo();
  };

  // Rendering condizionale in base allo step
  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="form-step">
            <h3>Cosa desideri wrappare?</h3>
            <div className="categoria-container">
              {['auto', 'moto', 'snowboard', 'barca', 'altro'].map(cat => (
                <div 
                  key={cat}
                  className={`categoria-card ${formData.categoria === cat ? 'selected' : ''}`}
                  onClick={() => setFormData({...formData, categoria: cat})}
                >
                  <img src={immaginiCategorie[cat]} alt={cat} />
                  <span>{cat.charAt(0).toUpperCase() + cat.slice(1)}</span>
                </div>
              ))}
            </div>
            
            {formData.categoria && (
              <div className="dettagli-categoria">
                <div className="input-group">
                  <label>Modello</label>
                  <input 
                    type="text" 
                    name="modello" 
                    value={formData.modello} 
                    onChange={handleChange} 
                    placeholder={`Modello ${formData.categoria}`} 
                  />
                </div>
                <div className="input-group">
                  <label>Anno</label>
                  <input 
                    type="text" 
                    name="anno" 
                    value={formData.anno} 
                    onChange={handleChange} 
                    placeholder="Anno" 
                  />
                </div>
              </div>
            )}
            
            <div className="navigation-buttons">
            <button className="next-button" onClick={nextStep}>
        Continua <FaArrowRight style={{ marginLeft: '8px' }} />
        </button>

            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="form-step">
            <h3>Che tipo di pellicola preferisci?</h3>
            <div className="pellicole-grid">
              {Object.keys(prezziPellicole).map(tipo => (
                <div 
                  key={tipo}
                  className={`pellicola-card ${formData.tipoPellicola === tipo ? 'selected' : ''}`}
                  onClick={() => setFormData({...formData, tipoPellicola: tipo})}
                >
                  <div className="pellicola-preview" style={{backgroundColor: getTipoPellicolaColor(tipo)}}></div>
                  <div className="pellicola-info">
                    <span className="pellicola-nome">{tipo.charAt(0).toUpperCase() + tipo.slice(1)}</span>
                    <span className="pellicola-prezzo">{prezziPellicole[tipo]}€/m²</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="navigation-buttons">
            <button className="prev-button" onClick={prevStep}>
                <FaArrowLeft style={{ marginRight: '8px' }} /> Indietro
                </button>
              <button className="next-button" onClick={nextStep}>
            Continua <FaArrowRight style={{ marginLeft: '8px' }} />
            </button>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="form-step">
            <h3>Quanto vuoi wrappare?</h3>
            <div className="superficie-options">
              <div 
                className={`option-card ${formData.superficieDaCoprire === 'completo' ? 'selected' : ''}`}
                onClick={() => setFormData({...formData, superficieDaCoprire: 'completo'})}
              >
                <div className="option-icon full-wrap"></div>
                <span>Wrapping completo</span>
                <p>Copertura totale del veicolo/oggetto</p>
              </div>
              
              <div 
                className={`option-card ${formData.superficieDaCoprire === 'parziale' ? 'selected' : ''}`}
                onClick={() => setFormData({...formData, superficieDaCoprire: 'parziale'})}
              >
                <div className="option-icon partial-wrap"></div>
                <span>Wrapping parziale</span>
                <p>Copertura di alcune parti (cofano, tetto, ecc.)</p>
              </div>
              
              <div 
                className={`option-card ${formData.superficieDaCoprire === 'dettagli' ? 'selected' : ''}`}
                onClick={() => setFormData({...formData, superficieDaCoprire: 'dettagli'})}
              >
                <div className="option-icon details-wrap"></div>
                <span>Solo dettagli</span>
                <p>Specchietti, maniglie, piccoli elementi</p>
              </div>
              
              <div 
                className={`option-card ${formData.superficieDaCoprire === 'personalizzato' ? 'selected' : ''}`}
                onClick={() => setFormData({...formData, superficieDaCoprire: 'personalizzato'})}
              >
                <div className="option-icon custom-wrap"></div>
                <span>Personalizzato</span>
                <p>Specifica la superficie in m²</p>
              </div>
            </div>
            
            {formData.superficieDaCoprire === 'personalizzato' && (
              <div className="input-group">
                <label>Superficie in m²</label>
                <input 
                  type="number" 
                  name="superficiePersonalizzata" 
                  value={formData.superficiePersonalizzata || ''} 
                  onChange={handleChange} 
                  placeholder="Inserisci i m² da coprire" 
                  step="0.1"
                  min="0.1"
                />
              </div>
            )}
            
            <div className="complessità-selector">
              <h4>Livello di complessità</h4>
              <div className="radio-group">
                <label>
                  <input 
                    type="radio" 
                    name="complessità" 
                    value="bassa" 
                    checked={formData.complessità === 'bassa'} 
                    onChange={handleChange} 
                  />
                  <span>Bassa</span>
                  <small>Superfici piane e semplici</small>
                </label>
                
                <label>
                  <input 
                    type="radio" 
                    name="complessità" 
                    value="media" 
                    checked={formData.complessità === 'media'} 
                    onChange={handleChange} 
                  />
                  <span>Media</span>
                  <small>Alcune curve e dettagli</small>
                </label>
                
                <label>
                  <input 
                    type="radio" 
                    name="complessità" 
                    value="alta" 
                    checked={formData.complessità === 'alta'} 
                    onChange={handleChange} 
                  />
                  <span>Alta</span>
                  <small>Molte curve e dettagli complessi</small>
                </label>
              </div>
            </div>
            
            <div className="navigation-buttons">
            <button className="prev-button" onClick={prevStep}>
            <FaArrowLeft style={{ marginRight: '8px' }} /> Indietro
            </button>
              <button 
                className="next-button" 
                onClick={nextStep}
                disabled={!formData.superficieDaCoprire || (formData.superficieDaCoprire === 'personalizzato' && !formData.superficiePersonalizzata)}
              >
                Continua
              </button>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="form-step">
            <h3>I tuoi dati di contatto</h3>
            <div className="contact-form">
              <div className="input-group">
                <label>Nome e Cognome</label>
                <input 
                  type="text" 
                  name="nome" 
                  value={formData.nome} 
                  onChange={handleChange} 
                  placeholder="Inserisci il tuo nome" 
                />
              </div>
              
              <div className="input-group">
                <label>Email</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="La tua email" 
                />
              </div>
              
              <div className="input-group">
                <label>Telefono</label>
                <input 
                  type="tel" 
                  name="telefono" 
                  value={formData.telefono} 
                  onChange={handleChange} 
                  placeholder="Numero di telefono" 
                />
              </div>
              
              <div className="input-group">
                <label>Note o dettagli aggiuntivi</label>
                <textarea 
                  name="dettagliAggiuntivi" 
                  value={formData.dettagliAggiuntivi} 
                  onChange={handleChange} 
                  placeholder="Descrivi eventuali dettagli specifici per il tuo progetto"
                  rows="4"
                ></textarea>
              </div>
            </div>
            
            <div className="navigation-buttons">
            <button className="prev-button" onClick={prevStep}>
            <FaArrowLeft style={{ marginRight: '8px' }} /> Indietro
            </button>
            <button 
            className="submit-button" 
            onClick={handleSubmit}
            disabled={!formData.nome || !formData.email}
            >
            <MdAttachMoney style={{ marginRight: '8px', verticalAlign: 'middle' }} />
            Calcola Preventivo
            </button>

            </div>
          </div>
        );
      
      case 5:
        return (
          <div className="result-step">
            <div className="result-header">
            <h2>
            <MdAttachMoney style={{ marginRight: '8px', verticalAlign: 'middle' }} />
            Il Tuo Preventivo
            </h2>
              <div className="italian-flag-line"></div>
            </div>
            
            {preventivo && (
              <div className="preventivo-result">
                <div className="price-card">
                  <div className="price-range">
                    <span className="price-from">{preventivo.minCost}€</span>
                    <span className="price-separator">-</span>
                    <span className="price-to">{preventivo.maxCost}€</span>
                  </div>
                  <p className="price-note">Prezzi stimati IVA esclusa</p>
                </div>
                
                <div className="preventivo-details">
                  <h4>Dettagli del preventivo</h4>
                  <ul>
                    <li><strong>Oggetto:</strong> {preventivo.dettagli.categoria.charAt(0).toUpperCase() + preventivo.dettagli.categoria.slice(1)}</li>
                    {formData.modello && <li><strong>Modello:</strong> {formData.modello}</li>}
                    <li><strong>Tipo di pellicola:</strong> {formData.tipoPellicola.charAt(0).toUpperCase() + formData.tipoPellicola.slice(1)}</li>
                    <li><strong>Superficie stimata:</strong> {preventivo.superficie} m²</li>
                    <li><strong>Complessità:</strong> {formData.complessità.charAt(0).toUpperCase() + formData.complessità.slice(1)}</li>
                  </ul>
                </div>
                
                <div className="disclaimer">
                  <p>Questo è un preventivo indicativo basato sulle informazioni fornite. Per un preventivo definitivo, ti contatteremo per organizzare un sopralluogo e valutare con precisione il lavoro.</p>
                </div>
                
                <div className="contact-info">
                  <h4>I tuoi dati</h4>
                  <p><strong>Nome:</strong> {formData.nome}</p>
                  <p><strong>Email:</strong> {formData.email}</p>
                  <p><strong>Telefono:</strong> {formData.telefono || 'Non specificato'}</p>
                  {formData.dettagliAggiuntivi && (
                    <>
                      <h4>Note aggiuntive</h4>
                      <p>{formData.dettagliAggiuntivi}</p>
                    </>
                  )}
                </div>
                
                <div className="next-steps">
                  <h4>Prossimi passi</h4>
                  <p>Ti contatteremo presto per confermare i dettagli del preventivo e organizzare un appuntamento. Grazie per averci scelto!</p>
                  <button className="restart-button" onClick={() => {
                    setFormData({
                      categoria: '',
                      modello: '',
                      anno: '',
                      tipoPellicola: '',
                      superficieDaCoprire: '',
                      complessità: 'media',
                      dettagliAggiuntivi: '',
                      nome: '',
                      email: '',
                      telefono: '',
                    });
                    setPreventivo(null);
                    setStep(1);
                  }}>
                    Richiedi un nuovo preventivo
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      
      default:
        return <div>Step non valido</div>;
    }
  };

  // Funzione per ottenere colori rappresentativi per ogni tipo di pellicola
  const getTipoPellicolaColor = (tipo) => {
    const colori = {
      'base': '#D3D3D3',      // Grigio chiaro
      'opaca': '#2C3E50',     // Blu scuro opaco
      'lucida': '#3498DB',    // Blu lucido
      'metallizzata': '#BDC3C7', // Argento metallizzato
      'cangiante': '#9B59B6',  // Viola cangiante
      'carbonio': '#34495E',  // Grigio scuro carbonio
      'premium': '#F1C40F',   // Oro premium
    };
    return colori[tipo] || '#D3D3D3';
  };

  return (
    <div className="preventivatore-wrapping">
      <div className="italian-flag-header">
        <div className="flag-green"></div>
        <div className="flag-white">
        <h2><GiWrappedSweet style={{ marginRight: '8px', verticalAlign: 'middle' }} /> Preventivatore di Wrapping</h2>
        </div>
        <div className="flag-red"></div>
      </div>
      
      {step < 5 && (
        <div className="progress-indicator">
          <div className="progress-bar">
            <div className="progress-fill" style={{width: `${(step / 4) * 100}%`}}></div>
          </div>
          <div className="step-labels">
            <span className={step >= 1 ? 'active' : ''}>Categoria</span>
            <span className={step >= 2 ? 'active' : ''}>Pellicole</span>
            <span className={step >= 3 ? 'active' : ''}>Superficie</span>
            <span className={step >= 4 ? 'active' : ''}>Contatti</span>
          </div>
        </div>
      )}
      
      <div className="form-container">
        {renderStep()}
      </div>
    </div>
  );
};

export default PreventivatoreDiWrapping;