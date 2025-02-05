const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/db');
const router = express.Router();

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
        if (err) return res.status(500).json({ error: err });
        if (results.length === 0) return res.status(401).json({ error: 'Usuário não encontrado' });

        bcrypt.compare(password, results[0].password, (err, isMatch) => {
            if (!isMatch) return res.status(401).json({ error: 'Senha incorreta' });

            const token = jwt.sign({ id: results[0].id }, 'secreto', { expiresIn: '1h' });
            res.json({ token });
        });
    });
});

module.exports = router;
