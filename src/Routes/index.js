import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import Task from "../Pages/Task";

const Routes = () => (
  <Switch>
    <Route path="/" exact={true} component={Home} />
    <Route path="/profile" exact={true} component={Profile} />
    <Route path="/task" exact={true} component={Task} />
  </Switch>
);

export default Routes;
