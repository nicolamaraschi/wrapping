// src/pages/Contatti.js
import React, { useState } from 'react';
import './Contatti.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaWhatsapp, FaBuilding, FaIdCard } from 'react-icons/fa';

const Contatti = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Qui andrebbe la logica per inviare il form
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 5000);
  };

  return (
    <div className="contacts-container">
      <div className="contacts-header">
        <h1>Contattaci</h1>
        <p>Siamo pronti a trasformare il tuo veicolo. Contattaci oggi stesso per un preventivo gratuito.</p>
      </div>
      
      <div className="contacts-content">
        <div className="contact-info-card">
          <h2>Informazioni di contatto</h2>
          
          <div className="contact-info-item">
            <div className="contact-icon">
              <FaBuilding />
            </div>
            <div className="contact-text">
              <h3>Azienda</h3>
              <p>Wrapping Italy S.r.l.</p>
            </div>
          </div>
          
          <div className="contact-info-item">
            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>
            <div className="contact-text">
              <h3>Sede</h3>
              <p>Via Concordia 9, 20090 Assago MI, Italy</p>
            </div>
          </div>
          
          <div className="contact-info-item">
            <div className="contact-icon">
              <FaIdCard />
            </div>
            <div className="contact-text">
              <h3>P.IVA</h3>
              <p>09414230962</p>
            </div>
          </div>
          
          <div className="contact-info-item">
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <div className="contact-text">
              <h3>Email</h3>
              <p><a href="mailto:info@wrappingitaly.it">info@wrappingitaly.it</a></p>
            </div>
          </div>
          
          <div className="contact-info-item">
            <div className="contact-icon">
              <FaPhone />
            </div>
            <div className="contact-text">
              <h3>Telefono</h3>
              <p><a href="tel:+39024881859">+39 02 4881859</a></p>
            </div>
          </div>
          
          <div className="contact-info-item">
            <div className="contact-icon">
              <FaWhatsapp />
            </div>
            <div className="contact-text">
              <h3>WhatsApp Business</h3>
              <p><a href="https://wa.me/393519173008">+39 351 917 3008</a></p>
            </div>
          </div>

          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <img src="/logo.png" alt="Wrapping Italy Logo" style={{ maxWidth: '150px', opacity: 0.8 }} />
          </div>
        </div>
        
        <div className="contact-form-card">
          <h2>Inviaci un messaggio</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Nome completo*</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Il tuo nome"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="La tua email"
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Telefono</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Il tuo numero di telefono"
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Oggetto*</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="L'oggetto del messaggio"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Messaggio*</label>
              <textarea 
                id="message" 
                name="message" 
                rows="6" 
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Descrivici il tuo progetto o la tua richiesta"
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              Invia Messaggio
            </button>
            
            {formSubmitted && (
              <div className="submission-message">
                Grazie per averci contattato! Ti risponderemo al più presto.
              </div>
            )}
          </form>
        </div>
      </div>
      
      <div className="map-container">
        <iframe
          title="Mappa sede Wrapping Italy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.4265040475076!2d9.158858315726145!3d45.41826567910192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c7048d7e4a43%3A0xf4c6e5a2d6f9b3ae!2sVia%20Concordia%209%2C%2020090%20Assago%20MI!5e0!3m2!1sit!2sit!4v1694615088523!5m2!1sit!2sit"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Contatti;