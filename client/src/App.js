import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchBooks from "./pages/SearchBooks";
import SavedBooks from "./pages/SavedBooks";
import NoMatchRoute from "./pages/NoMatchRoute";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav></Nav>
        <Switch>
          <Route exact path="/" component={SearchBooks} />
          <Route exact path="/books" component={SearchBooks} />
          <Route exact path="/saved" component={SavedBooks} />
          <Route component={NoMatchRoute} />
        </Switch>
      </div>
    </Router>
  );

}

export default App;
