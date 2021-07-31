import React from "react";
import { useHistory, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Room from "./Pages/Room/Room";

const App = () => {
  const history = useHistory();

  return (
    <Switch>
      <Route exact path="/">
        <Dashboard history={history} />
      </Route>

      <Route exact path="/room/:id">
        <Room history={history} />
      </Route>

      <Redirect to="/" />
    </Switch>
  );
}

export default App;
