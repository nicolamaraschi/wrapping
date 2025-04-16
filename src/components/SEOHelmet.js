// components/SEOHelmet.js
import React from 'react';
import { Helmet } from 'react-helmet';

const SEOHelmet = ({ title, description, keywords, canonicalUrl, ogImage }) => {
  return (
    <Helmet>
      <title>{title ? `${title} | Wrapping Italy` : 'Wrapping Italy - Servizi di Wrapping Professionali'}</title>
      <meta name="description" content={description || 'Servizi professionali di wrapping per auto, moto, barche e design. Trasforma il tuo veicolo con pellicole di alta qualità.'} />
      <meta name="keywords" content={keywords || 'wrapping, car wrapping, wrapping auto, wrapping moto, pellicole auto, car wrap, personalizzazione veicoli'} />
      <link rel="canonical" href={canonicalUrl || 'https://wrappingitaly.it'} />
      
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title ? `${title} | Wrapping Italy` : 'Wrapping Italy - Servizi di Wrapping Professionali'} />
      <meta property="og:description" content={description || 'Servizi professionali di wrapping per auto, moto, barche e design. Trasforma il tuo veicolo con pellicole di alta qualità.'} />
      <meta property="og:image" content={ogImage || 'https://wrappingitaly.it/og-image.jpg'} />
      <meta property="og:url" content={canonicalUrl || 'https://wrappingitaly.it'} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title ? `${title} | Wrapping Italy` : 'Wrapping Italy - Servizi di Wrapping Professionali'} />
      <meta name="twitter:description" content={description || 'Servizi professionali di wrapping per auto, moto, barche e design. Trasforma il tuo veicolo con pellicole di alta qualità.'} />
      <meta name="twitter:image" content={ogImage || 'https://wrappingitaly.it/og-image.jpg'} />
    </Helmet>
  );
};

export default SEOHelmet;