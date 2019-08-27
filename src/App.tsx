import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import { Button } from '@material-ui/core';

import Theme from './components/Theme';

import './App.css';

class App extends Component {
  /**
   *
   */
  constructor(props) {
    super(props);
    this.btnClicked = this.btnClicked.bind(this);
  }
  componentDidMount() {
    console.log('Hello World');
  }

  btnClicked(event) {
    console.log(event);
  }

  render() {
    return (
      <Theme>
        <div className="App">
          <Button
            variant="contained"
            type="button"
            color="primary"
            onClick={this.btnClicked}
          >
            Hello, World
          </Button>
        </div>
      </Theme>
    );
  }
}

export default hot(module)(App);
