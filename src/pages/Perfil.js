import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Certifique-se de que o Bootstrap está importado

// Corrija os caminhos das imagens, subindo um nível no diretório (../)
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

const Inicio = () => {
  return (
    <div className="container mt-5">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="d-block w-100" alt="Imagem 1" />
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block w-100" alt="Imagem 2" />
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100" alt="Imagem 3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Inicio;
