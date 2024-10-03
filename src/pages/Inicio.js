import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa o CSS do Bootstrap para estilização das páginas
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Importa o JS do Bootstrap para funcionalidades interativas (ex: dropdowns)
import { useNavigate } from 'react-router-dom'; // Hook para navegação programática dentro do React Router
import image3 from '../assets/image3.jpg'; // Importa uma imagem que será usada como banner na página inicial
import educacaoImage from './assets/educacaoImage.jpg'; // Importa a imagem usada para a campanha de educação
import empreendedorismoImage from './assets/empreendedorismoImage.jpg'; // Importa a imagem usada para a campanha de empreendedorismo
import emergencialImage from './assets/emergencialImage.jpg'; // Importa a imagem usada para a campanha de assistência emergencial
import esporteImage from './assets/esporte.jpg'; // Importa a imagem usada para a campanha de incentivo ao esporte
import saudeImage from './assets/saudeImage.jpg'; // Importa a imagem usada para a campanha de saúde da mulher
import artesanatoImage from './assets/artesanatoImage.jpg'; // Importa a imagem usada para a campanha de projetos sociais
import aureliaLogo from '../assets/aurelia_logo.png'; // Importa a imagem do logotipo da plataforma Aurelia
import './Inicio.css'; // Importa o arquivo CSS específico para estilização da página inicial

// Dados simulados para as campanhas em destaque
const campaignsData = [
  {
    id: 1, // Identificador único da campanha
    title: "Educação", // Título da campanha
    description: "Apoio à educação para meninas e jovens mulheres em regiões carentes.", // Descrição da campanha
    progress: 50, // Progresso em porcentagem do valor arrecadado
    collected: 5000, // Quantia já arrecadada
    goal: 10000, // Meta da campanha
    image: educacaoImage, // Imagem da campanha
  },
  {
    id: 2,
    title: "Empreendedorismo",
    description: "Ajuda financeira para mulheres que estão iniciando seus próprios negócios.",
    progress: 75,
    collected: 7500,
    goal: 10000,
    image: empreendedorismoImage, // Imagem da campanha de empreendedorismo
  },
  {
    id: 3,
    title: "Assistência Emergencial",
    description: "Campanha para ajudar vítimas de desastres naturais.",
    progress: 40,
    collected: 4000,
    goal: 10000,
    image: emergencialImage, // Imagem da campanha de assistência emergencial
  },
  {
    id: 4,
    title: "Incentivo ao Esporte",
    description: "Apoio ao desenvolvimento de atletas femininas em regiões carentes.",
    progress: 30,
    collected: 3000,
    goal: 10000,
    image: esporteImage, // Imagem da campanha de incentivo ao esporte
  },
  {
    id: 5,
    title: "Saúde da Mulher",
    description: "Ajuda financeira para tratamentos médicos de mulheres carentes.",
    progress: 60,
    collected: 6000,
    goal: 10000,
    image: saudeImage, // Imagem da campanha de saúde da mulher
  },
  {
    id: 6,
    title: "Projetos Sociais",
    description: "Iniciativas sociais focadas no bem-estar e empoderamento feminino.",
    progress: 80,
    collected: 8000,
    goal: 10000,
    image: artesanatoImage, // Imagem da campanha de projetos sociais
  },
];

// Componente da página inicial (Inicio)
const Inicio = () => {
  const navigate = useNavigate(); // Hook do React Router usado para navegação entre páginas

  return (
    <div className="page-container"> {/* Container principal que engloba toda a página */}

      <div className="hero-section"> {/* Seção que contém o banner da página */}
        <img src={image3} alt="Banner" className="banner-image" /> {/* Exibe a imagem de banner */}
      </div>

      <img src={aureliaLogo} alt="Logo Aurelia" className="aurelia-logo" /> {/* Exibe o logo da Aurelia no layout */}

      {/* Seção de Campanhas em Destaque */}
      <div className="campaigns-section">
        <h1 className="section-title">Campanhas em Destaque</h1> {/* Título da seção de campanhas */}
        <div className="campaign-grid"> {/* Grid que organiza as campanhas em formato de cards */}
          {/* Mapeia os dados das campanhas para criar os cards */}
          {campaignsData.map((campaign) => (
            <div className="campaign-card" key={campaign.id}> {/* Cada card de campanha */}
              <img src={campaign.image} alt={campaign.title} className="campaign-image" /> {/* Exibe a imagem da campanha */}
              <h4>{campaign.title}</h4> {/* Exibe o título da campanha */}
              <p>{campaign.description}</p> {/* Exibe a descrição da campanha */}
              <div className="progress-bar"> {/* Barra de progresso da campanha */}
                <div className="progress" style={{ width: `${campaign.progress}%` }}></div> {/* Preenchimento da barra de progresso */}
              </div>
              <p>R$ {campaign.collected.toLocaleString()} arrecadado de R$ {campaign.goal.toLocaleString()}</p> {/* Exibe a quantia arrecadada e a meta */}
              <button className="btn">Doar Agora</button> {/* Botão para doar na campanha */}
            </div>
          ))}
        </div>
        {/* Botão "Ver Mais" */}
        <div className="ver-mais-container"> {/* Container do botão Ver Mais */}
          <button className="ver-mais-btn" onClick={() => navigate('/campanhas')}> {/* Botão que navega para a página de campanhas */}
            Ver Mais →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inicio; // Exporta o componente para ser usado em outras partes da aplicação
