import './App.css';  // Importa o arquivo CSS para estilização da aplicação
import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';  // Importa as funções de roteamento do React Router
import Inicio from './pages/Inicio';  // Importa a página Início
import SobreNos from './pages/SobreNos';  // Importa a página Sobre Nós
import Campanhas from './pages/Campanhas';  // Importa a página Campanhas
import Duvidas from './pages/Duvidas';  // Importa a página Dúvidas
import Pesquisa from './pages/Pesquisa';  // Importa a página Pesquisa
import Login from './pages/Login';  // Importa a página de Login
import Cadastro from './pages/Cadastro';  // Importa a página de Cadastro
import logo from './assets/aurelia_logo.png'; // Importa a logo da Aurelia
import Admin from './pages/Admin'; // Importa a página Admin para gestão da plataforma
import Doar from './pages/Doar'; // Importa a página Doar para processar doações
import PaymentForm from './components/PaymentForm'; // Importa o formulário de pagamento
import EnviarHistoria from './pages/EnviarHistoria'; // Importe o componente da nova página "EnviarHistoria"

function App() {
  return (
    <Router>  {/* O Router é utilizado para gerenciar a navegação entre as páginas */}
      <div className="App">
        {/* Barra de navegação com links para as principais páginas */}
        <nav className="navbar">
          <div className="navbar-logo">
            <img src={logo} alt="Aurelia Logo" className="logo" />  {/* Exibe a logo da plataforma */}
          </div>
          <ul className="navbar-menu">
            {/* Links de navegação para as diferentes páginas */}
            <li><NavLink to="/" activeClassName="active">Início</NavLink></li>  {/* Link para a página Início */}
            <li><NavLink to="/sobre-nos" activeClassName="active">Sobre Nós</NavLink></li>  {/* Link para a página Sobre Nós */}
            <li><NavLink to="/campanhas" activeClassName="active">Campanhas</NavLink></li>  {/* Link para a página Campanhas */}
            <li><NavLink to="/duvidas" activeClassName="active">Dúvidas</NavLink></li>  {/* Link para a página Dúvidas */}
            <li><NavLink to="/pesquisa" activeClassName="active">Pesquisar</NavLink></li>  {/* Link para a página Pesquisa */}
            <li><NavLink to="/entrar" activeClassName="active">Entrar</NavLink></li>  {/* Link para a página de Login */}
          </ul>
        </nav>

        {/* Rotas da aplicação, mapeando as URLs para os componentes correspondentes */}
        <Routes>
          <Route path="/" element={<Inicio />} />  {/* Rota para a página Início */}
          <Route path="/sobre-nos" element={<SobreNos />} />  {/* Rota para a página Sobre Nós */}
          <Route path="/campanhas" element={<Campanhas />} />  {/* Rota para a página Campanhas */}
          <Route path="/duvidas" element={<Duvidas />} />  {/* Rota para a página Dúvidas */}
          <Route path="/pesquisa" element={<Pesquisa />} />  {/* Rota para a página Pesquisa */}
          <Route path="/entrar" element={<Login />} />  {/* Rota para a página Login */}
          <Route path="/cadastro" element={<Cadastro />} />  {/* Rota para a página Cadastro */}
          <Route path="/admin" element={<Admin />} />  {/* Rota para a página Admin */}
          <Route path="/doar" element={<Doar />} />  {/* Rota para a página Doar */}
          <Route path="/pagar" element={<PaymentForm />} />  {/* Rota para o formulário de pagamento */}
          <Route path="/enviar-historia" element={<EnviarHistoria />} />  {/* Nova rota para a página de envio de história */}
        </Routes>

        {/* Rodapé da página com informações de contato e links rápidos */}
        <footer className="footer">
            <div className="footer-content">
              {/* Seção do rodapé sobre a plataforma */}
              <div className="footer-section about">
                <h4>Sobre a Aurelia</h4>
                <p>Aurelia é uma plataforma de crowdfunding dedicada a apoiar projetos liderados por mulheres. Nosso objetivo é empoderar mulheres em todas as esferas da vida.</p>
              </div>

              {/* Seção do rodapé com links rápidos */}
              <div className="footer-section links">
                <h4>Links Rápidos</h4>
                <ul>
                  <li><a href="/sobre-nos">Sobre Nós</a></li>
                  <li><a href="/termos-de-uso">Termos de Uso</a></li>
                  <li><a href="/politica-de-privacidade">Política de Privacidade</a></li>
                  <li><a href="/contato">Contato</a></li>
                </ul>
              </div>

              {/* Seção do rodapé com informações de contato */}
              <div className="footer-section contact">
                <h4>Contato</h4>
                <p>Email: suporte@aurelia.com</p>
                <p>Telefone: +55 (11) 1234-5678</p>
                <p>Endereço: Rua Exemplo, 123, São Paulo, SP</p>
              </div>
            </div>

            {/* Seção inferior do rodapé */}
            <div className="footer-bottom">
              <p>&copy; 2024 Aurelia | Todos os direitos reservados.</p>
              {/* Ícones de redes sociais */}
              <div className="footer-socials">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
