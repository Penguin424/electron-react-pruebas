import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootswatch/dist/cosmo/bootstrap.min.css";

import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
