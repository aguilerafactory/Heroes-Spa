import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../auth/context';



export const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login', { replace: true });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            <Link className="navbar-brand" to="/">Asociaciones</Link>
            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink className="nav-item nav-link"  to="/marvel">Marvel</NavLink>
                    <NavLink className="nav-item nav-link" to="/dc">DC</NavLink>
                    <NavLink className="nav-item nav-link" to="/search">Busqueda</NavLink>
                    <NavLink className="nav-item nav-link" to="/hero">H&eacute;roe</NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-primary">Ismael</span>
                    <button className='nav-item nav-link btn' onClick={ handleLogout }>Logout</button>
                </ul>
            </div>
        </nav>
    )
}