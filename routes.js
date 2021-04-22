import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from './Header/Header'
import AuthPage from "./AuthPage/AuthPage";

const Routes = () => (
    <BrowserRouter>
      <Header test={123} />
      {/* <div className="container">
        <Switch>
            <Route path='/' exact render={() => <AuthPage/>}/>
        </Switch>
      </div> */}
    </BrowserRouter>
  );

export default Routes;
