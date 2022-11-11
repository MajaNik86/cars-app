
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./layouts/Layout";
import AppCars from "./pages/AppCars";
import AddCar from "./pages/AddCar";

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
        </Switch>
      </Layout>

    </div>
  );
}

export default App;
