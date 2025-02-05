import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/register', { username, password });
            alert('Usuário cadastrado com sucesso! Faça login.');
            navigate('/');
        } catch (err) {
            alert('Erro ao cadastrar usuário');
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-lg" style={{ width: '400px' }}>
                <h2 className="text-center mb-4">Cadastro</h2>
                <form onSubmit={handleRegister}>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Usuário" onChange={(e) => setUsername(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button type="submit" className="btn btn-success w-100">Cadastrar</button>
                </form>
                <p className="text-center mt-3">
                    Já tem uma conta? <a href="/">Faça login</a>
                </p>
            </div>
        </div>
    );
}

export default Register;
