# Sistema de Login com React, Node.js e MySQL

Este projeto é um sistema de login e cadastro de usuários utilizando **React** no frontend, **Node.js (Express)** no backend e **MySQL** como banco de dados. O sistema redireciona os usuários autenticados para um painel de controle (**Dashboard**), que está estruturado com **Header, Sidebar e Footer** para uma melhor organização.

---

## 🛠 Tecnologias Utilizadas

### **Frontend**
- [React.js](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [Bootstrap](https://getbootstrap.com/)

### **Backend**
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [bcrypt](https://www.npmjs.com/package/bcrypt) (Hash de senhas)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) (Autenticação JWT)
- [mysql2](https://www.npmjs.com/package/mysql2) (Driver MySQL para Node.js)

### **Banco de Dados**
- [MySQL](https://www.mysql.com/)

---

## 🚀 Como Executar o Projeto

### **1️⃣ Clonar o Repositório**
```bash
git clone https://github.com/GilkleytonSI/login-system.git
cd login-system
```

### **2️⃣ Configurar o Backend**

#### **📌 Instalar Dependências**
```bash
cd backend
npm install
```

#### **📌 Configurar Banco de Dados**
Crie um banco de dados MySQL e execute a seguinte query para criar a tabela de usuários:
```sql
CREATE DATABASE login_db;
USE login_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```

#### **📌 Configurar Variáveis de Ambiente**
Crie um arquivo `.env` no diretório **backend/** e adicione:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=login_db
JWT_SECRET=seu_segredo_super_secreto
```

#### **📌 Iniciar o Backend**
```bash
node index.js
```

---

### **3️⃣ Configurar o Frontend**

#### **📌 Instalar Dependências**
```bash
cd frontend
npm install
```

#### **📌 Iniciar o Frontend**
```bash
npm start
```

---

## 📌 Estrutura do Projeto

```
📦 sistema-login-react
 ├── 📂 backend
 │   ├── 📂 config
 │   ├── ├── db.js  # Conexão com MySQL
 │   ├── 📂 routes
 │   ├── ├── auth.js  # Rotas de autenticação 
 │   ├── ├── register.js  # Rotas do resgistro   
 │   ├── index.js  # Arquivo principal do servidor
 │   ├── .env  # Configurações do banco de dados e JWT
 │   └── package.json  # Dependências do backend
 │   
 ├── 📂 frontend
 │   ├── 📂 src
 │   │   ├── 📂 components
 │   │   │   ├── Header.js  # Cabeçalho do Dashboard
 │   │   │   ├── Sidebar.js  # Barra lateral do Dashboard
 │   │   │   ├── Footer.js  # Rodapé do Dashboard
 │   │   │   ├── Login.js  # Tela de Login
 │   │   │   ├── Register.js  # Tela de Cadastro
 │   │   │   ├── Dashboard.js  # Painel de Controle
 │   │   ├── App.js  # Rotas do Frontend
 │   │   └── index.js  # Arquivo principal do React
 │   ├── package.json  # Dependências do frontend
 │   ├── public
 │   ├── .env  # Configuração do frontend
 │
 ├── README.md  # Documentação do projeto
 ├── .gitignore  # Arquivos ignorados pelo Git
 └── package.json  # Dependências gerais
```

---

## 🔒 **Segurança**
✅ Senhas armazenadas com **bcrypt** (hashing seguro)  
✅ Tokens JWT para autenticação segura  
✅ Proteção contra acesso não autorizado no Dashboard

---

## 📌 **Funcionalidades do Projeto**
✅ Cadastro de usuários com senha criptografada  
✅ Login e autenticação com **JWT**  
✅ Redirecionamento para **Dashboard** após login  
✅ **Logout** com remoção do token  
✅ **Interface responsiva** com **Bootstrap**  
✅ Layout organizado com **Header, Sidebar e Footer**

---

## 🎯 **Próximas Melhorias**
🔹 Validação de formulários com mensagens de erro  
🔹 Sistema de recuperação de senha  
🔹 Dashboard dinâmico com estatísticas  
🔹 Melhorias na UI/UX

---

## 📜 **Licença**
Este projeto está sob a licença **MIT**. Você pode usá-lo, modificar e distribuir livremente. 😊

---

Se tiver dúvidas ou sugestões, fique à vontade para contribuir! 🚀😃

