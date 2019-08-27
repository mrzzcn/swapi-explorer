import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';

class App extends Component {
  componentDidMount() {
    console.log('Hello World');
  }

  render() {
    return (
      <div className="App">
        <h1> Hello, World</h1>
      </div>
    );
  }
}

export default hot(module)(App);
