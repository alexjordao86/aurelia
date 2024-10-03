import React from 'react';

const Login = () => {
  return (
    <div className="container">
      <h1 className="section-title">Entrar</h1>
      <form>
        <input type="email" placeholder="Digite seu email" />
        <input type="password" placeholder="Digite sua senha" />
        <button type="submit" className="btn">Entrar</button>
      </form>
      <p>Ainda não tem uma conta? <a href="/cadastro">Cadastre-se aqui</a>.</p>
    </div>
  );
};

export default Login;
