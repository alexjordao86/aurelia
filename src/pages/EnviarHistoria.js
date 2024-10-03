import React, { useState, useEffect } from 'react';
import Select from 'react-select'; // Importa a biblioteca react-select
import axios from 'axios'; // Importa a biblioteca axios para fazer requisições HTTP
import './EnviarHistoria.css'; // Certifique-se de que o caminho está correto


const EnviarHistoria = () => {
  const [estados, setEstados] = useState([]); // Estado para armazenar a lista de estados
  const [cidades, setCidades] = useState([]); // Estado para armazenar a lista de cidades
  const [estadoSelecionado, setEstadoSelecionado] = useState(null); // Estado para armazenar o estado selecionado
  const [cidadeSelecionada, setCidadeSelecionada] = useState(null); // Estado para armazenar a cidade selecionada

  // Função para buscar os estados ao carregar a página
  useEffect(() => {
    const buscarEstados = async () => {
      try {
        const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
        const options = response.data.map(estado => ({
          value: estado.id,
          label: estado.nome,
        }));
        setEstados(options); // Define os estados no formato adequado para o react-select
      } catch (error) {
        console.error("Erro ao buscar estados", error);
      }
    };
    buscarEstados(); // Chama a função para buscar os estados
  }, []);

  // Função para buscar as cidades de um estado selecionado
  const buscarCidades = async (estadoId) => {
    try {
      const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoId}/municipios`);
      const options = response.data.map(cidade => ({
        value: cidade.id,
        label: cidade.nome,
      }));
      setCidades(options); // Define as cidades no formato adequado para o react-select
    } catch (error) {
      console.error("Erro ao buscar cidades", error);
    }
  };

  // Manipula a seleção de estado
  const handleEstadoChange = (selectedOption) => {
    setEstadoSelecionado(selectedOption); // Define o estado selecionado
    setCidadeSelecionada(null); // Reseta a cidade selecionada
    buscarCidades(selectedOption.value); // Busca as cidades do estado selecionado
  };

  // Manipula a seleção de cidade
  const handleCidadeChange = (selectedOption) => {
    setCidadeSelecionada(selectedOption); // Define a cidade selecionada
  };

  return (
    <div className="form-container">
      <h1>Conte sua história</h1>
      <p>Ela pode virar uma campanha!</p>
      
      {/* Campo Nome Completo */}
      <div className="form-group">
        <label>Nome completo</label>
        <input type="text" placeholder="João Maria" />
      </div>
      
      {/* Campo E-mail */}
      <div className="form-group">
        <label>E-mail</label>
        <input type="email" placeholder="seuemail@mail.com" />
      </div>
      
      {/* Campo Telefone */}
      <div className="form-group">
        <label>Telefone</label>
        <input type="tel" placeholder="(00) 00000-0000" />
      </div>
      
      {/* Estado e Cidade */}
      <div className="form-row">
        <div className="form-group half-width">
          <label>Estado</label>
          <Select
            options={estados} // Lista de opções de estados
            value={estadoSelecionado} // Estado selecionado
            onChange={handleEstadoChange} // Função ao alterar o estado
            placeholder="Selecione um estado"
          />
        </div>
        <div className="form-group half-width">
          <label>Cidade</label>
          <Select
            options={cidades} // Lista de opções de cidades
            value={cidadeSelecionada} // Cidade selecionada
            onChange={handleCidadeChange} // Função ao alterar a cidade
            placeholder="Selecione uma cidade"
            isDisabled={!estadoSelecionado} // Desabilita o campo até que um estado seja selecionado
          />
        </div>
      </div>

      {/* Resumo da história */}
      <div className="form-group">
        <label>Resumo da história</label>
        <textarea placeholder="Escreva um resumo curto da sua história" />
      </div>

      {/* Objetivo da vaquinha e Meta */}
      <div className="form-row">
        <div className="form-group half-width">
          <label>Objetivo da vaquinha</label>
          <input type="text" placeholder="Qual o objetivo da sua vaquinha?" />
        </div>
        <div className="form-group half-width">
          <label>Possível meta</label>
          <div className="input-group">
            <span className="input-prefix">R$</span>
            <input type="text" placeholder="10.000" />
          </div>
        </div>
      </div>

      {/* Botão de envio */}
      <button className="submit-button" type="submit">Enviar</button>
    </div>
  );
};

export default EnviarHistoria;
