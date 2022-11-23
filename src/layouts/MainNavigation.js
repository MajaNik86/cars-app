import classes from './MainNavigation.module.css';
import { NavLink, Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { authService } from "../services/AuthService";

const MainNavigation = () => {
    const history = useHistory();
    const token = localStorage.getItem("token");

    const handleLogout = async () => {
        await authService.logout();
        alert("You have logged out.");
        history.push("/cars");

    };


    return <header className={classes.header}>
        <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink to='/cars' activeClassName={classes.active}>Cars</NavLink>
                </li>
                <li>
                    <NavLink to='/add' activeClassName={classes.active}>Add New Car</NavLink>
                </li>
                <li>
                    {token ? (
                        <button onClick={handleLogout}>Logout</button>
                    ) : (<>

                        <NavLink to='/login' activeClassName={classes.active}>Login    </NavLink>


                        <NavLink to='/register' activeClassName={classes.active}>    Register </NavLink>

                    </>
                    )}
                </li>
            </ul>
        </nav>
    </header >
}

export default MainNavigation;