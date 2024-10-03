import React, { useState, useEffect } from 'react';
import './Admin.css';

function Admin() {
  // Estados para gerenciar os valores do formulário de criação de campanha
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [goal, setGoal] = useState('');
  const [duration, setDuration] = useState('');

  // Estados para armazenar campanhas, usuários, mensagens, e a campanha que está sendo editada
  const [campaigns, setCampaigns] = useState([]);
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [editingCampaign, setEditingCampaign] = useState(null); // Campanha em edição
  const [editingUser, setEditingUser] = useState(null); // Usuário em edição
  const [updateMessage, setUpdateMessage] = useState(''); // Mensagem de atualização para campanhas

  // Função para criar uma nova campanha
  const handleCreateCampaign = (e) => {
    e.preventDefault();

    // Dados da campanha que serão enviados para o backend
    const campaignData = {
      title,
      description,
      goal,
      duration,
    };

    fetch('/api/campaigns', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(campaignData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Campanha criada:', data);
        window.location.href = `/campanhas/${data.slug}`; // Redireciona para a página da campanha criada
      })
      .catch((error) => {
        console.error('Erro ao criar campanha:', error);
      });
  };

  // Função para carregar as campanhas existentes no backend
  useEffect(() => {
    fetch('/api/campaigns')
      .then((response) => response.json())
      .then((data) => setCampaigns(data))
      .catch((error) => console.error('Erro ao carregar campanhas:', error));
  }, []);

  // Função para carregar os usuários existentes no backend
  useEffect(() => {
    fetch('/api/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Erro ao carregar usuários:', error));
  }, []);

  // Função para carregar as mensagens enviadas pelos usuários
  useEffect(() => {
    fetch('/api/messages')
      .then((response) => response.json())
      .then((data) => setMessages(data))
      .catch((error) => console.error('Erro ao carregar mensagens:', error));
  }, []);

  // Função para excluir uma campanha do backend
  const handleDeleteCampaign = (id) => {
    fetch(`/api/campaigns/${id}`, { method: 'DELETE' })
      .then(() => {
        alert('Campanha excluída com sucesso!');
        setCampaigns(campaigns.filter((campaign) => campaign.id !== id)); // Remove a campanha da lista
      })
      .catch((error) => console.error('Erro ao excluir campanha:', error));
  };

  // Função para excluir um usuário do backend
  const handleDeleteUser = (id) => {
    fetch(`/api/users/${id}`, { method: 'DELETE' })
      .then(() => {
        alert('Usuário excluído com sucesso!');
        setUsers(users.filter((user) => user.id !== id)); // Remove o usuário da lista
      })
      .catch((error) => console.error('Erro ao excluir usuário:', error));
  };

  // Função para editar uma campanha existente
  const handleEditCampaign = (campaign) => {
    setEditingCampaign(campaign); // Define a campanha que será editada
  };

  // Função para salvar as mudanças de uma campanha editada
  const handleUpdateCampaign = (e) => {
    e.preventDefault();

    const updatedCampaign = {
      title: editingCampaign.title,
      description: editingCampaign.description,
      goal: editingCampaign.goal,
      duration: editingCampaign.duration,
    };

    fetch(`/api/campaigns/${editingCampaign.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedCampaign),
    })
      .then((response) => response.json())
      .then((data) => {
        alert('Campanha atualizada com sucesso!');
        setEditingCampaign(null); // Fecha o formulário de edição
        setCampaigns(campaigns.map(c => (c.id === editingCampaign.id ? data : c))); // Atualiza a lista
      })
      .catch((error) => console.error('Erro ao atualizar campanha:', error));
  };

  // Função para editar um usuário
  const handleEditUser = (user) => {
    setEditingUser(user); // Define o usuário que será editado
  };

  // Função para salvar as mudanças de um usuário editado
  const handleUpdateUser = (e) => {
    e.preventDefault();

    const updatedUser = {
      full_name: editingUser.full_name,
      email: editingUser.email,
    };

    fetch(`/api/users/${editingUser.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
    })
      .then((response) => response.json())
      .then((data) => {
        alert('Usuário atualizado com sucesso!');
        setEditingUser(null); // Fecha o formulário de edição
        setUsers(users.map(u => (u.id === editingUser.id ? data : u))); // Atualiza a lista
      })
      .catch((error) => console.error('Erro ao atualizar usuário:', error));
  };

  // Função para enviar atualizações de campanhas
  const handleSendUpdate = (e, campaignId) => {
    e.preventDefault();

    fetch(`/api/campaigns/${campaignId}/updates`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: updateMessage }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert('Atualização enviada com sucesso!');
        setUpdateMessage(''); // Limpa o campo de mensagem
      })
      .catch((error) => console.error('Erro ao enviar atualização:', error));
  };

  return (
    <div>
      <h1>Área Administrativa</h1>

      {/* Criação de Campanha */}
      <h2>Criar Nova Campanha</h2>
      <form onSubmit={handleCreateCampaign}>
        <label>Título da Campanha</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Descrição da Campanha</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <label>Meta de Arrecadação (em R$)</label>
        <input
          type="number"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          required
        />
        <label>Duração da Campanha (em dias)</label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />
        <button type="submit">Criar Campanha</button>
      </form>

      {/* Listagem de Campanhas */}
      <h2>Gerenciar Campanhas</h2>
      <ul>
        {campaigns.map((campaign) => (
          <li key={campaign.id}>
            {campaign.title} - {campaign.description} - R${campaign.goal}
            <button onClick={() => handleEditCampaign(campaign)}>Editar</button>
            <button onClick={() => handleDeleteCampaign(campaign.id)}>Excluir</button>
            {/* Formulário para enviar atualizações */}
            <form onSubmit={(e) => handleSendUpdate(e, campaign.id)}>
              <label>Enviar Atualização:</label>
              <textarea
                value={updateMessage}
                onChange={(e) => setUpdateMessage(e.target.value)}
                required
              />
              <button type="submit">Enviar</button>
            </form>
          </li>
        ))}
      </ul>

      {/* Gestão de Usuários */}
      <h2>Gerenciar Usuários</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.full_name} - {user.email}
            <button onClick={() => handleEditUser(user)}>Editar</button>
            <button onClick={() => handleDeleteUser(user.id)}>Excluir</button>
          </li>
        ))}
      </ul>

      {/* Mensagens dos Usuários */}
      <h2>Mensagens dos Usuários</h2>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            {message.user}: {message.content}
            <button>Responder</button>
          </li>
        ))}
      </ul>

      {/* Edição de Campanha */}
      {editingCampaign && (
        <div>
          <h2>Editar Campanha</h2>
          <form onSubmit={handleUpdateCampaign}>
            <label>Título da Campanha</label>
            <input
              type="text"
              value={editingCampaign.title}
              onChange={(e) => setEditingCampaign({ ...editingCampaign, title: e.target.value })}
              required
            />
            <label>Descrição da Campanha</label>
            <textarea
              value={editingCampaign.description}
              onChange={(e) => setEditingCampaign({ ...editingCampaign, description: e.target.value })}
              required
            />
            <label>Meta de Arrecadação (em R$)</label>
            <input
              type="number"
              value={editingCampaign.goal}
              onChange={(e) => setEditingCampaign({ ...editingCampaign, goal: e.target.value })}
              required
            />
            <label>Duração da Campanha (em dias)</label>
            <input
              type="number"
              value={editingCampaign.duration}
              onChange={(e) => setEditingCampaign({ ...editingCampaign, duration: e.target.value })}
              required
            />
            <button type="submit">Salvar</button>
            <button type="button" onClick={() => setEditingCampaign(null)}>Cancelar</button>
          </form>
        </div>
      )}

      {/* Edição de Usuário */}
      {editingUser && (
        <div>
          <h2>Editar Usuário</h2>
          <form onSubmit={handleUpdateUser}>
            <label>Nome Completo</label>
            <input
              type="text"
              value={editingUser.full_name}
              onChange={(e) => setEditingUser({ ...editingUser, full_name: e.target.value })}
              required
            />
            <label>E-mail</label>
            <input
              type="email"
              value={editingUser.email}
              onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
              required
            />
            <button type="submit">Salvar</button>
            <button type="button" onClick={() => setEditingUser(null)}>Cancelar</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Admin;
