import React from 'react';
import './Contatti.css';

const Contacts = () => {
  return (
    <div className="contacts-container">
      <div className="contact-box">
        <h2>Contatti</h2>
        <p><strong>HQ:</strong> Via Concordia 9, 20090 Assago MI - Italy</p>
        <p><strong>Azienda:</strong> Wrapping Italy S.r.l.</p>
        <p><strong>P.IVA:</strong> 09414230962</p>
        <p><strong>Email:</strong> <a href="mailto:info@wrappingitaly.it">info@wrappingitaly.it</a></p>
        <p><strong>Phone:</strong> <a href="tel:+39024881859">+39 02 4881859</a></p>
        <p><strong>WhatsApp Business:</strong> <a href="https://wa.me/393519173008">+39 351 917 3008</a></p>
      </div>
      
      <div className="map-box">
        <h2>La Nostra Posizione</h2>
        <iframe
          title="Mappa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.4265040475076!2d9.158858315726145!3d45.41826567910192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c7048d7e4a43%3A0xf4c6e5a2d6f9b3ae!2sVia%20Concordia%209%2C%2020090%20Assago%20MI!5e0!3m2!1sit!2sit!4v1694615088523!5m2!1sit!2sit"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>

      <div className="contact-form-box">
        <h2>Contattaci</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Messaggio:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Invia</button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
