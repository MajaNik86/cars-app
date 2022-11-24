import classes from './MainNavigation.module.css';
import { NavLink, Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { authService } from "../services/AuthService";
import useAuth from '../hooks/useAuth';


const MainNavigation = () => {
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
                {/* {!user.name && (
                    <li>
                        <NavLink to='/login' activeClassName={classes.active}>Login    </NavLink>
                    </li>
                )}
                {!user.name && (
                    <li>
                        <NavLink to='/register' activeClassName={classes.active}>Register    </NavLink>
                    </li>
                )}
                {user.name && (
                    <li>
                        <button onClick={handleLogout}>Logout</button>
                    </li>
                )} */}
                <li>
                    <NavLink to='/cars' activeClassName={classes.active}>Cars</NavLink>
                </li>
                <li>
                    <NavLink to='/add' activeClassName={classes.active}>Add New Car</NavLink>
                </li>
                <li>
                    <NavLink to='/cars/:id' activeClassName={classes.active}>Single Car</NavLink>
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