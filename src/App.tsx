import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Route } from 'react-router';

import './App.css';

import IndexPage from './pages/Index';
import AboutPage from './pages/About';
import ThemeDemoPage from './pages/Theme';

class App extends Component {
  componentDidMount() {
    console.log(
      `%c${this.constructor.name}:`,
      'color: green;font-weight: bold;',
      'Hello World'
    );
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/theme" component={ThemeDemoPage} />

      </div>
    );
  }
}

export default hot(module)(App);
