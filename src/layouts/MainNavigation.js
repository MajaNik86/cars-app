import classes from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom';
const MainNavigation = () => {

    return <header className={classes.header}>
        <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink to='/cars' activeClassName={classes.active}>Cars</NavLink>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;