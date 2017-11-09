import React, { Component } from 'react';
import { ConnectedRouter as Router } from 'react-router-redux';
import { Switch, Route } from 'react-router-dom';

import AppContent from './AppContent';
import AppWrapper from './AppWrapper';
import AppFrame from './AppFrame';

import Home from '../Home/Home';
import About from '../About/About';

export default class AppRouter extends Component {
  render() {
    const { history } = this.props;

    return (
      <Router history={history}>
        <AppWrapper>

          <AppFrame>
            <AppContent>
              <Switch>

                <Route path="/about" component={About} />

                <Route path="/" component={Home} />

              </Switch>
            </AppContent>
          </AppFrame>

        </AppWrapper>
      </Router>
    );
  }
}