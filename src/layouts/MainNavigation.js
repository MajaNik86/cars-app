import classes from './MainNavigation.module.css';
import { NavLink, Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { authService } from "../services/AuthService";
import useAuth from '../hooks/useAuth';


const MainNavigation = (props) => {
    const { user, logout } = useAuth();
    const history = useHistory();
    const token = localStorage.getItem("token");

    const handleLogout = async () => {
        await authService.logout();
        history.push("/cars");
    };


    return <header className={classes.header}>

        <nav className={classes.nav}>
            <ul>
                {!user.name && (
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                )}
                {!user.name && (
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                )}
                <li>
                    <Link to="/cars">Cars</Link>
                </li>
                <li>
                    <Link to="/add">Add</Link>
                </li>
                <li>
                    <button onClick={handleLogout}>Logout</button>
                </li>
            </ul>

            {/* <li>
                    {token ? (
                        <button onClick={handleLogout}>Logout</button>
                    ) : (<>

                        <NavLink to='/login' activeClassName={classes.active}>Login    </NavLink>


                        <NavLink to='/register' activeClassName={classes.active}>    Register </NavLink>

                    </>
                    )}
                </li> */}

        </nav>
    </header >
}

export default MainNavigation;