import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import Accueil from "./Accueil";
import Menu from "./Menu";

const AppRouter = () => {
  return (
    <Router>
      <div className="AppRouter">
        <Menu />
        <Switch>
          <Route path="/" exact component={Accueil} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;