import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchBooks from "./pages/SearchBooks";
import SavedBooks from "./pages/SavedBooks";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={SearchBooks} />
          <Route exact path="/books" component={SearchBooks} />
          {/* <Route exact path="/saved" component={SavedBooks} /> */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );

}

export default App;
