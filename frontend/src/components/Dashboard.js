import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

function Dashboard() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) navigate('/');
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <div className="d-flex flex-column vh-100">
            <Header />
            <div className="d-flex flex-grow-1">
                <Sidebar onLogout={handleLogout} />
                <main className="flex-grow-1 p-4">
                    <h2>Bem-vindo ao Dashboard</h2>
                    <p>Aqui você pode gerenciar suas informações e configurações.</p>
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default Dashboard;
