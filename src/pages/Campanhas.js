import React, { useState } from 'react';
import './Campanhas.css';  // Importa o arquivo de estilo Campanhas.css

// Importe as imagens das campanhas
import educacaoImage from './assets/educacaoImage.jpg';
import empreendedorismoImage from './assets/empreendedorismoImage.jpg';
import emergencialImage from './assets/emergencialImage.jpg';
import esporteImage from './assets/esporte.jpg';
import saudeImage from './assets/saudeImage.jpg';
import artesanatoImage from './assets/artesanatoImage.jpg';
import meninasCozinhandoImage from './assets/meninas_cozinhando.jpg';

// Dados das campanhas
const campaignsData = [
  {
    id: 1,
    title: "Educação",
    description: "Apoio à educação para meninas e jovens mulheres em regiões carentes.",
    progress: 50,
    collected: 5000,
    goal: 10000,
    category: "Educação",
    image: educacaoImage
  },
  {
    id: 2,
    title: "Empreendedorismo",
    description: "Ajuda financeira para mulheres que estão iniciando seus próprios negócios.",
    progress: 75,
    collected: 7500,
    goal: 10000,
    category: "Projetos sociais",
    image: empreendedorismoImage
  },
  {
    id: 3,
    title: "Assistência Emergencial",
    description: "Campanha para ajudar vítimas de desastres naturais.",
    progress: 40,
    collected: 4000,
    goal: 10000,
    category: "Emergenciais",
    image: emergencialImage
  },
  {
    id: 4,
    title: "Incentivo ao Esporte",
    description: "Apoio ao desenvolvimento de atletas femininas em regiões carentes.",
    progress: 30,
    collected: 3000,
    goal: 10000,
    category: "Esporte",
    image: esporteImage
  },
  {
    id: 5,
    title: "Saúde da Mulher",
    description: "Ajuda financeira para tratamentos médicos de mulheres carentes.",
    progress: 60,
    collected: 6000,
    goal: 10000,
    category: "Saúde",
    image: saudeImage
  },
  {
    id: 6,
    title: "Projetos Sociais",
    description: "Iniciativas sociais focadas no bem-estar e empoderamento feminino.",
    progress: 80,
    collected: 8000,
    goal: 10000,
    category: "Projetos sociais",
    image: artesanatoImage
  },
];

// Componente principal Campanhas
const Campanhas = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");  // Estado para armazenar a categoria selecionada

  // Função para filtrar as campanhas com base na categoria selecionada
  const filteredCampaigns = selectedCategory === "Todos" 
    ? campaignsData  // Exibe todas as campanhas se a categoria for "Todos"
    : campaignsData.filter(campaign => campaign.category === selectedCategory);  // Filtra com base na categoria selecionada

  return (
    <div className="container">  {/* Contêiner principal que engloba toda a página */}
      
      {/* Hero Section (Banner) */}
      <div className="hero-section">
      <img src={meninasCozinhandoImage} alt="Meninas cozinhando" className="image" />
        <h1 className="hero-title">Apoie campanhas que transformam vidas</h1>  {/* Título do Banner */}
      </div>

      {/* Lista de Campanhas */}
      <h3 className="section-title">Campanhas</h3>  {/* Título da seção de campanhas */}
      
      <div className="campaign-grid">  {/* Grid que contém os cards de campanhas */}
        {filteredCampaigns.map((campaign) => (
          <div className="campaign-card" key={campaign.id}>  {/* Card de campanha individual */}
            <img src={campaign.image} alt={campaign.title} className="campaign-image" />  {/* Imagem da campanha */}
            <h3>{campaign.title}</h3>  {/* Título da campanha */}
            <p>{campaign.description}</p>  {/* Descrição da campanha */}
            <div className="progress-bar">  {/* Barra de progresso */}
              <div className="progress" style={{ width: `${campaign.progress}%` }}></div>  {/* Preenchimento da barra com base no progresso */}
            </div>
            <p>R$ {campaign.collected.toLocaleString()} arrecadado de R$ {campaign.goal.toLocaleString()}</p>  {/* Valores arrecadados e a meta */}
            <button className="btn">Doar Agora</button>  {/* Botão para doar */}
          </div>
        ))}
      </div>
      {/* Carrossel de Categorias */}
      <div className="category-carousel">
        <button className="carousel-control prev">←</button>  {/* Botão para voltar no carrossel */}
        <div className="carousel-items">
          {["Todos", "Educação", "Emergenciais", "Esporte", "Saúde", "Projetos sociais"].map((category) => (
            <div 
              key={category}  // Chave única para cada item do carrossel
              className={`carousel-item ${selectedCategory === category ? 'active' : ''}`}  // Aplica classe 'active' se a categoria for a selecionada
              onClick={() => setSelectedCategory(category)}  // Define a categoria ao clicar
            >
              {category}  {/* Exibe o nome da categoria */}
            </div>
          ))}
        </div>
        <button className="carousel-control next">→</button>  {/* Botão para avançar no carrossel */}
      </div>
    </div>
  );
};

export default Campanhas;  // Exporta o componente Campanhas
