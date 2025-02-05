require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const registerRoutes = require('./routes/register');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', authRoutes);
app.use('/api', registerRoutes);


app.listen(5000, () => console.log('Servidor rodando na porta 5000'));
