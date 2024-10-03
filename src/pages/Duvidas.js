import React, { useState } from 'react';
import './Duvidas.css'; // Importa o arquivo CSS da página Dúvidas

// Componente principal da página Dúvidas
const Duvidas = () => {
  const [activeTab, setActiveTab] = useState('faq'); // Controla qual aba está ativa (taxas, pix, faq)
  const [openIndex, setOpenIndex] = useState(null); // Controla qual pergunta do FAQ está aberta

  // Função que alterna a visibilidade da resposta do FAQ quando uma pergunta é clicada
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Fecha a pergunta se já estiver aberta, senão, abre
  };

  return (
    <div className="container">
      <h1 className="section-title">Dúvidas</h1>

      {/* Barra de Menu */}
      <div className="tabs">
        <button
          className={activeTab === 'taxas' ? 'active-tab' : ''}
          onClick={() => setActiveTab('taxas')}
        >
          Taxas
        </button>
        <button
          className={activeTab === 'pix' ? 'active-tab' : ''}
          onClick={() => setActiveTab('pix')}
        >
          Como Doar Via PIX
        </button>
        <button
          className={activeTab === 'faq' ? 'active-tab' : ''}
          onClick={() => setActiveTab('faq')}
        >
          FAQ
        </button>
      </div>

      {/* Conteúdo Condicional baseado na aba ativa */}
      <div className="tab-content">
        {activeTab === 'taxas' && (
          <div>
            <h3>Taxas</h3>
            <p>
              Somos uma plataforma 100% transparente, e ficamos muito felizes pelo seu interesse em saber como tudo funciona por aqui.
              É importante observar que a taxa administrativa de 15%, cobrada sobre o valor arrecadado e prevista contratualmente em cada campanha, é cobrada para que consigamos manter a empresa sustentável. 
            </p>
          </div>
        )}

        {activeTab === 'pix' && (
          <div>
            <h3>Como Doar Via PIX</h3>
            <p>
              Você pode doar usando PIX diretamente para a campanha escolhida. Ao finalizar a doação, um QR Code será gerado para o pagamento.
            </p>
          </div>
        )}

        {activeTab === 'faq' && (
          <div>
            <h3>FAQ</h3>

            {/* Estrutura de Accordion para o FAQ */}
            <div className="faq-accordion">
              {faqData.map((item, index) => (
                <div key={index} className="faq-item">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="faq-question"
                  >
                    {item.question}
                  </button>
                  {openIndex === index && (
                    <div className="faq-answer">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Dados simulados para as perguntas e respostas do FAQ
const faqData = [
  {
    question: "Como posso criar uma campanha?",
    answer: "Você pode criar uma campanha ao se registrar e acessar o painel de criação de campanhas. Preencha os detalhes da sua iniciativa e comece a arrecadar fundos!"
  },
  {
    question: "Existe um contrato entre a AURELIA e o beneficiário?",
    answer: "Sim, após a aprovação da campanha e da documentação, assinamos o contrato com os beneficiários."
  },
  {
    question: "Como enviar a minha história?",
    answer: "Se o seu projeto precisa de uma vaquinha e quer nos enviar a sua história, é super fácil!"
  },
  {
    question: "Vocês podem divulgar a minha vaquinha?",
    answer: "A AURELIA divulga apenas vaquinhas abertas na sua própria plataforma por questões de segurança e credibilidade."
  },
  {
    question: "Por que a AURELIA é confiável?",
    answer: "Prezamos pela transparência e credibilidade, logo, a AURELIA não é uma plataforma aberta onde qualquer pessoa pode criar uma vaquinha."
  },
  {
    question: "Como ter certeza que a campanha não é fake?",
    answer: "Cada vaquinha passa por um rigoroso processo de verificação. Nós confirmamos se a história é verídica."
  },
  {
    question: "Quem pode doar?",
    answer: "Qualquer pessoa pode doar para as campanhas disponíveis na plataforma. Basta acessar a campanha desejada e clicar no botão de doação."
  },
  {
    question: "Quais tipos de projetos posso criar?",
    answer: "Projetos focados em educação, empreendedorismo, saúde, e outras áreas que promovem o empoderamento feminino são bem-vindos."
  },
  {
    question: "É possível cancelar minha doação?",
    answer: "Se o beneficiário da campanha já recebeu o valor, não é possível realizar o estorno. Caso contrário, entre em contato conosco."
  }
];

export default Duvidas;
