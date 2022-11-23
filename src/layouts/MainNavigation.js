import classes from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom';

const MainNavigation = () => {


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
                    <NavLink to='/login' activeClassName={classes.active}>Login</NavLink>
                </li>

            </ul>
        </nav>
    </header>
}

export default MainNavigation;