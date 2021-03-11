import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "./container/Landing/Landing";
import Table from "./container/Table/Table";
import Form from "./container/Form/Form";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route component={Landing} path="/" exact />
        <Route component={Table} path="/table" exact />
        <Route component={Form} path="/form" exact />
      </Switch>
    </React.Fragment>
  );
}

export default App;
