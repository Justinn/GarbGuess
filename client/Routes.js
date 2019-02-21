import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Inventory from './components/Inventory';
import Items from './components/Items';
import Login from './components/Login'

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/items" component={Items} />
        <Route path="/inventory" component={Inventory} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    );
  }
}

export default withRouter(Routes);
