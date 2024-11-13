import {Link} from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-button">Create Ticket</Link>
            <Link to="/tasks" className="nav-button">Ticets</Link>
        </nav>
    );
}
