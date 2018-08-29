import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './common/Header';
import Nav from './common/Nav';
import Home from './Home';
import History from './History';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/history" component={History} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
