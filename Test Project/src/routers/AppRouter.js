import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink, HashRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import NINverification from "../pages/NINverification";
import About from "../pages/About";
import Faq from "../pages/FAQ";
import Slug from "../pages/Slug";
import Apps from "../pages/Apps";
import Business from "../pages/Business";

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
