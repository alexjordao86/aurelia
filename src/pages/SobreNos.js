import React from 'react';
import './SobreNos.css'; // Importa o arquivo de estilos da página
import floresImage from './assets/flores.jpg'; // Caminho correto para as imagens
import mulheresUnidasImage from './assets/mulheres_unidas.jpg';
import dignidadeImage from './assets/dignidade.jpg';
import equipeImage from './assets/equipe.jpg';
import iconechegadahistoria from './assets/1_iconechegadahistoria.png';
import iconecuradoriaeverificacao from './assets/2_iconecuradoriaeverificacao.png';
import iconechecagemdedocumentos from './assets/3_iconechecagemdedocumentos.png';
import iconeassinaturadocontrato from './assets/4_iconeassinaturadocontrato.png';
import iconeestrategiadelancamento from './assets/5_iconeestrategiadelancamento.png';
import iconeproducaodeconteudo from './assets/6_iconeproducaodeconteudo.png';
import iconetransferenciadovalor from './assets/7_iconetransferenciadovalor.png';
import iconeprestacaodecontas from './assets/8_iconeprestacaodecontas.png';
import meninas_brincando from './assets/meninas_brincando.jpg';
import empreendedorismoImage from './assets/empreendedorismoImage.jpg';


// Componente principal "SobreNos"
const SobreNos = () => {
  return (
    // Container Principal para envolver todo o conteúdo da página
    <div className="page-container">
      
      {/* Seção 1 - Hero Section (Título com Imagem) */}
      <div className="hero-section">
        <img src={floresImage} alt="flores" className="flores" /> 
        {/* Título principal da página */}
        <h1>Queremos mudar o <br /> final das histórias</h1>
      </div>

      {/* Seção 2 - Introdução */}
      <div className="intro-section">
        <div className="intro-content">
          <p>O projeto Aurelia começou como um trabalho de conclusão do curso de Análise e Desenvolvimento de Sistemas, da UNINASSAU RECIFE, com o objetivo de promover a igualdade de gênero por meio do apoio a projetos liderados por mulheres. Durante o desenvolvimento, a equipe viu o potencial de criar impacto social ao facilitar o financiamento e a visibilidade de iniciativas femininas, resultando em uma plataforma de crowdfunding inovadora que conecta pessoas e instituições dispostas a apoiar essas causas.</p>
          <p>O Aurelia evoluiu além de um projeto acadêmico, tornando-se uma ferramenta vital para mulheres empreendedoras e líderes que enfrentam barreiras em suas trajetórias. A plataforma oferece não apenas suporte financeiro, mas também visibilidade para vozes e histórias muitas vezes ignoradas, permitindo que mulheres realizem seus projetos e criem um impacto positivo em suas comunidades.</p>
          <p>Com sua atuação, o Aurelia tem gerado mudanças significativas, conectando ideias a recursos e promovendo a equidade de gênero. Ele estimula o desenvolvimento econômico e social de mulheres, desempenhando um papel crucial na construção de um futuro mais justo e igualitário.</p>
        </div>
      </div>

      {/* Seção 3 - Como Funciona */}
      <section className="section-how-it-works">
        <div className="banner-section">
          <img src={mulheresUnidasImage} alt="mulheres unidas" className="mulheres-unidas" />
          <h1>Como funciona <br /> nosso trabalho</h1>
        </div>
      </section>

      {/* Seção 4 - Processo em 8 Etapas */}
      <section className="process-section">
        <div className="process-content">
          <p>Existem vários processos até a nossa campanha ser lançada, fazemos tudo com muito cuidado e carinho para que a história chegue até você certinha, como deve ser:</p>
          <ol className="process-list">
            <li><img src={iconechegadahistoria} alt="Chegada da história" className="process-icon" /><p>1 - Chegada da história</p></li>
            <li><img src={iconecuradoriaeverificacao} alt="Curadoria e verificação" className="process-icon" /><p>2 - Curadoria e verificação</p></li>
            <li><img src={iconechecagemdedocumentos} alt="Checagem de documentos" className="process-icon" /><p>3 - Checagem de documentos</p></li>
            <li><img src={iconeassinaturadocontrato} alt="Assinatura do contrato" className="process-icon" /><p>4 - Assinatura do contrato</p></li>
            <li><img src={iconeestrategiadelancamento} alt="Estratégia de lançamento" className="process-icon" /><p>5 - Estratégia de lançamento</p></li>
            <li><img src={iconeproducaodeconteudo} alt="Produção de conteúdo" className="process-icon" /><p>6 - Produção de conteúdo</p></li>
            <li><img src={iconetransferenciadovalor} alt="Transferência de valor" className="process-icon" /><p>7 - Transferência do valor</p></li>
            <li><img src={iconeprestacaodecontas} alt="Prestação de contas" className="process-icon" /><p>8 - Prestação de contas</p></li>
          </ol>
        </div>
      </section>

      {/* Seção 5 - Verificação e Segurança Jurídica */}
      <div className="verificacao-section">
        <div className="verificacao-content">
          <h3>Verificação das histórias</h3>
          <p>Prezamos pela transparência e credibilidade construída, por isso a AURELIA não é uma plataforma aberta onde qualquer pessoa pode criar uma campanha. As nossas campanhas passam por um rigoroso processo de curadoria e verificação antes de serem lançadas. Nós confirmamos se a história é verídica, se os beneficiários são idôneos e se realmente é necessária uma campanha de arrecadação.</p>
          <h3>Segurança Jurídica</h3>
          <p>Após a aprovação da campanha, assinamos o contrato com os beneficiários, nele constam todas as questões legais para garantir que o objetivo da campanha seja realizado após a arrecadação. Abordamos também a taxa administrativa, o valor da meta e o que será feito com o dinheiro recebido pelo beneficiário. Somente após o contrato assinado entre a AURELIA e o beneficiário, a campanha vai ao ar.</p>
        </div>
        <img src={meninas_brincando} alt="meninas brincando" className="meninas-brincando" />
      </div>

      {/* Seção 6 - Comunicação */}
      <div className="comunicacao-section">
        <img src={dignidadeImage} alt="dignidade" className="dignidade" />
        <div className="comunicacao-content">
          <h3>Comunicação</h3>
          <p>Nosso time de comunicação se esforça diariamente para contar as histórias de forma humanizada, com simplicidade, veracidade e sempre respeitando a integridade dos beneficiários.</p>
          <p>Nosso objetivo é amplificar as histórias e engajar cada vez mais pessoas.</p>
        </div>
      </div>

      {/* Seção 7 - Desfecho */}
      <div className="desfecho-section">
        <div className="desfecho-content">
          <h3>Desfecho das vaquinhas</h3>
          <p>Nosso time é responsável por acompanhar tudo o que é feito após a vaquinha ser encerrada e o valor transferido para o beneficiário. Dessa forma, tentamos garantir que o valor doado seja usado adequadamente e de acordo com o objetivo da campanha.</p>
          <p>Fazemos questão de manter contato com os beneficiários e de prestar contas para os doadores.</p>
          <p>Levamos a sério a prestação de contas para que você fique sempre informado e saiba o que está sendo feito com a sua doação.</p>
        </div>
        <img src={empreendedorismoImage} alt="empreendedorismo" className="empreendedorismo" />
      </div>
    </div>
  );
};

export default SobreNos;
