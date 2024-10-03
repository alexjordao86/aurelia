// Importando as bibliotecas necessárias
const express = require('express');
const mysql = require('mysql2'); // Usando a biblioteca mysql2 para se conectar ao banco de dados MySQL
const mercadopago = require('mercadopago'); // Integrando a API do Mercado Pago
const jwt = require('jsonwebtoken'); // JWT para autenticação
const bcrypt = require('bcryptjs'); // Biblioteca para hashing de senhas

const app = express(); // Inicializando o Express

// Middleware para permitir JSON no corpo das requisições
app.use(express.json());

// Configurar a conexão com o banco de dados RDS
const connection = mysql.createConnection({
  host: 'aurelia.cbosaggee7fn.us-east-2.rds.amazonaws.com', // Endpoint do banco de dados RDS
  user: 'admin',      // Nome do usuário do RDS
  password: 'Aurelia2024#',  // Senha do RDS
  database: 'aurelia',  // Nome do banco de dados utilizado
  port: 3306           // Porta para o MySQL
});

// Testar a conexão com o banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err); // Exibe mensagem de erro se a conexão falhar
  } else {
    console.log('Conexão com o banco de dados estabelecida com sucesso!'); // Exibe mensagem de sucesso
  }
});

// Configurando o token de acesso do Mercado Pago
mercadopago.configure({
  access_token: 'APP_USR-7968013631228360-092414-48ab404b4b5956dfd5eb1fdf6bb30243-30877279' // Token de acesso do Mercado Pago
});

// Rota de login para administradores - gera um token JWT
app.post('/api/admin/login', (req, res) => {
  const { email, password } = req.body;

  // Buscar o administrador no banco de dados (deve ser ajustado para buscar do banco)
  const admin = { email: 'admin@aurelia.com', passwordHash: bcrypt.hashSync('senha', 8) }; // Exemplo de usuário administrador

  // Comparar a senha informada com o hash salvo
  if (email === admin.email && bcrypt.compareSync(password, admin.passwordHash)) {
    // Se as credenciais estiverem corretas, gera o token JWT
    const token = jwt.sign({ email: admin.email }, 'chave-secreta', { expiresIn: '1h' });
    res.json({ token }); // Envia o token de volta ao cliente
  } else {
    res.status(401).json({ message: 'Credenciais inválidas' }); // Retorna erro de autenticação
  }
});
// Middleware para verificar o token JWT
const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization']; // Pega o token do cabeçalho da requisição

  if (!authHeader) return res.status(403).send('Token não fornecido.'); // Se não houver token, retorna erro

  // O token vem com o formato 'Bearer <token>', então precisamos remover o 'Bearer '
  const token = authHeader.split(' ')[1]; // Pega apenas a segunda parte, que é o token

  if (!token) return res.status(403).send('Token mal formatado.');

  // Agora verificamos o token sem o 'Bearer'
  jwt.verify(token, 'chave-secreta', (err, decoded) => {
    if (err) return res.status(500).send('Falha ao autenticar o token.'); // Verifica a validade do token
    req.admin = decoded; // Salva os dados do token decodificado no request
    next(); // Continua para a próxima função middleware
  });
};

// Endpoint para criar uma nova campanha (Protegido por JWT)
app.post('/api/campaigns', verifyToken, (req, res) => {
  const { title, description, goal, duration } = req.body;

  if (!title || !description || !goal || !duration) {
    return res.status(400).json({ msg: 'Todos os campos são obrigatórios' }); // Verifica se todos os campos estão preenchidos
  }

  // Gerar o slug da campanha (URL amigável) a partir do título
  const slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

  // Inserir os dados da campanha no banco de dados
  const sql = 'INSERT INTO campaigns (title, description, goal, duration, slug) VALUES (?, ?, ?, ?, ?)';
  connection.query(sql, [title, description, goal, duration, slug], (err, result) => {
    if (err) {
      console.error('Erro ao inserir campanha:', err);
      return res.status(500).json({ msg: 'Erro ao criar campanha' });
    }
    res.status(201).json({ msg: 'Campanha criada com sucesso!', slug }); // Retorna sucesso com o slug da campanha
  });
});

// Endpoint para processar pagamento via Mercado Pago
app.post('/api/pay', (req, res) => {
  const { amount, token, description, email } = req.body;

  if (!amount || !token || !description || !email) {
    return res.status(400).json({ msg: 'Todos os campos são obrigatórios' }); // Valida se todos os campos foram preenchidos
  }

  // Dados do pagamento enviados para o Mercado Pago
  const payment_data = {
    transaction_amount: parseFloat(amount),
    token: token,
    description: description,
    payment_method_id: 'visa', // Método de pagamento (pode ser alterado conforme necessário)
    payer: {
      email: email
    }
  };

  // Chamada para a API do Mercado Pago para processar o pagamento
  mercadopago.payment.save(payment_data)
    .then((response) => {
      res.status(200).send(response); // Retorna sucesso com os dados do pagamento
    })
    .catch((error) => {
      console.error('Erro ao processar pagamento:', error);
      res.status(500).json({ msg: 'Erro ao processar pagamento', error }); // Retorna erro caso algo falhe
    });
});

// Inicializa o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000'); // Informa que o servidor está rodando na porta 3000
});
