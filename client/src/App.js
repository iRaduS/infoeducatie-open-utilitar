import { useHistory, Route, Switch, Redirect } from "react-router-dom";

const App = () => {
  const history = useHistory();

  return (
    <Switch>
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
