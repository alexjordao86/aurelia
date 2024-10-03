import React from 'react';
import './CategoryCarousel.css';

const CategoryCarousel = () => {
  return (
    <div className="category-carousel">
      <div className="carousel-items">
        <div className="carousel-item">Todos</div>
        <div className="carousel-item">Educação</div>
        <div className="carousel-item">Emergenciais</div>
        <div className="carousel-item">Esporte</div>
        <div className="carousel-item">Saúde</div>
        <div className="carousel-item">Projetos sociais</div>
      </div>
    </div>
  );
};

export default CategoryCarousel;
