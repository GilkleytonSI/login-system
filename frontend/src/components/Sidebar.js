function Sidebar({ onLogout }) {
    return (
        <div className="bg-light border-end vh-100 p-3">
            <h5 className="mb-4">Menu</h5>
            <ul className="nav flex-column">
                <li className="nav-item mb-2">
                    <a href="#" className="nav-link text-dark">🏠 Dashboard</a>
                </li>
                <li className="nav-item mb-2">
                    <a href="#" className="nav-link text-dark">⚙️ Configurações</a>
                </li>
                <li className="nav-item mt-3">
                    <button className="btn btn-danger w-100" onClick={onLogout}>Sair</button>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
