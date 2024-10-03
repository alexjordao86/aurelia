import React from 'react';
import './HeroSection.css';

// Importe as imagens corretamente
import meninasCozinhando from './assets/meninas_cozinhando.jpg';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="image-container">
        <picture>
          {/* Utilize a imagem importada para todas as resoluções */}
          <source media="(max-width: 479px)" srcSet={meninasCozinhando} />
          <source media="(max-width: 767px)" srcSet={meninasCozinhando} />
          <source media="(max-width: 991px)" srcSet={meninasCozinhando} />
          <img
            src={meninasCozinhando}
            alt="Hero Section"
            className="hero-image"
            loading="lazy"
          />
        </picture>
      </div>
    </section>
  );
};

export default HeroSection;
