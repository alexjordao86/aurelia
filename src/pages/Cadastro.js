import React, { useState } from 'react';

const Cadastro = () => {
  const [tipo, setTipo] = useState('fisica');

  return (
    <div className="container">
      <h1 className="section-title">Criar Conta</h1>
      <form>
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="fisica">Pessoa Física</option>
          <option value="juridica">Empresa</option>
        </select>
        {tipo === 'fisica' ? (
          <input type="text" placeholder="Digite seu CPF" />
        ) : (
          <input type="text" placeholder="Digite seu CNPJ" />
        )}
        <input type="text" placeholder="Nome Completo" />
        <input type="email" placeholder="Digite seu email" />
        <input type="password" placeholder="Digite sua senha" />
        <input type="password" placeholder="Repita sua senha" />
        <div className="form-check">
          <input type="checkbox" />
          <label>Eu concordo com os termos de uso e a política de privacidade</label>
        </div>
        <button type="submit" className="btn">Criar Conta</button>
      </form>
    </div>
  );
};

export default Cadastro;
