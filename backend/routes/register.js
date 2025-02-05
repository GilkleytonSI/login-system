const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../config/db');

const router = express.Router();

router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const saltRounds = 10;

    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (err, results) => {
            if (err) return res.status(500).json({ error: 'Erro ao cadastrar usuário' });
            res.status(201).json({ message: 'Usuário cadastrado com sucesso' });
        });

    } catch (err) {
        res.status(500).json({ error: 'Erro ao processar a requisição' });
    }
});

module.exports = router;
