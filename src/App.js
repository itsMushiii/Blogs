import React from "react";
import Blogs from "./Components/Blogs";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetails from "./Components/BlogDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Blogs} />
        <Route exact path='/blog-details/:id' component={BlogDetails} />
      </Switch>
    </Router>
  );
}

export default App;
