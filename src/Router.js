import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AppCars from "./pages/AppCars";
import AddCar from "./pages/AddCar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import useAuth from "./hooks/useAuth";

const AuthRoute = ({ children, ...rest }) => {
    const { user } = useAuth();
    return <Route {...rest}> {user.name ? children : <Redirect to='/login' />}</Route>
}
const GuestRoute = ({ children, ...rest }) => {
    const { user } = useAuth();
    return <Route {...rest}>{user.name ? <Redirect to='/cars' /> : children}</Route>
}

function Router() {
    return (
        <div className="App">
            <Switch>
                <AuthRoute path='/' exact>
                    <Redirect to='/cars'></Redirect>
                </AuthRoute>
                <Route path='/cars' exact>
                    <AppCars />
                </Route>
                <AuthRoute path='/add'>
                    <AddCar />
                </AuthRoute>
                {/* <AuthRoute exact path='/edit/:id'>
                    <AddCar />
                </AuthRoute> */}
                <GuestRoute path='/login' exact>
                    <Login />
                </GuestRoute>
                <GuestRoute path='/register' exact>
                    <Register />
                </GuestRoute>
            </Switch>
        </div>
    );
}

export default Router;
