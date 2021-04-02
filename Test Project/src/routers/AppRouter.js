import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink, HashRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";


const AppRouter = () => (
  <HashRouter>
    <div>
      <Switch>
        <Route path="/" component={LandingPage} exact={true} />
        <Route path="/home" component={LandingPage} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  </HashRouter>
);

export default AppRouter;
