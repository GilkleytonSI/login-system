import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/login', { username, password });
            localStorage.setItem('token', res.data.token);
            navigate('/dashboard');
        } catch (err) {
            alert('Login falhou');
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-lg" style={{ width: '400px' }}>
                <h2 className="text-center mb-4">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Usuário" onChange={(e) => setUsername(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Entrar</button>
                </form>
                <p className="text-center mt-3">
                    Não tem uma conta? <a href="/register">Cadastre-se</a>
                </p>
            </div>
        </div>
    );
}

export default Login;
