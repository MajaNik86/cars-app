
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./layouts/Layout";
import AppCars from "./pages/AppCars";
import AddCar from "./pages/AddCar";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/cars'></Redirect>
          </Route>
          <Route path='/cars' exact>
            <AppCars />
          </Route>
          <Route path='/add' exact>
            <AddCar />
          </Route>
          <Route exact path='/edit/:id'>
            <AddCar />
          </Route>
          <Route path='/login' exact>
            <Login />
          </Route>
        </Switch>
      </Layout>

    </div>
  );
}

export default App;
