import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import CommandsPage from "./pages/commands";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/commands" component={CommandsPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
