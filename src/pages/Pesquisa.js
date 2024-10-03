import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Importar o ícone de lupa

const Pesquisa = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(`Pesquisa realizada para: ${query}`);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Pesquisar Campanhas</h2>
      <form onSubmit={handleSearch} className="d-flex justify-content-center">
        <input
          type="text"
          className="form-control"
          placeholder="Digite o nome da campanha..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="btn btn-primary ms-2">
          <FaSearch /> {/* Ícone de lupa */}
        </button>
      </form>
    </div>
  );
};

export default Pesquisa;
