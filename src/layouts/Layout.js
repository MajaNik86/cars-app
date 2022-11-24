import { Fragment } from "react";
import classes from './Layout.module.css';
import MainNavigation from "./MainNavigation";
import useAuth from "../hooks/useAuth";

const Layout = ({ children }) => {
    const { user, login } = useAuth();
    return <Fragment>
        <MainNavigation />
        <main className={classes.main}>{children}</main>
        <footer> {user && user.name}</footer>
    </Fragment>
}
export default Layout;