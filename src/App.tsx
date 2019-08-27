import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Route } from 'react-router';

import {
  Theme,
  createStyles,
  withStyles,
  WithStyles
} from '@material-ui/core/styles';

// import AppTheme from './components/AppTheme';
import './App.css';

import IndexPage from './pages/Index';
import AboutPage from './pages/About';
import ThemeDemoPage from './pages/Theme';

const styles = (theme: Theme) =>
  createStyles({
    body: {
      backgroundColor: theme.palette.background.default,
      minHeight: '100vh',
      color: theme.palette.text.primary
    }
  });

interface AppProps extends WithStyles<typeof styles> {
  toggle: () => void;
}

class App extends Component<AppProps> {
  componentDidMount() {
    console.log(
      `%c${this.constructor.name}:`,
      'color: green;font-weight: bold;',
      'Hello World'
    );
  }

  render() {
    const { classes, toggle } = this.props;
    return (
      <div className={classes.body}>
        <button onClick={toggle}>Toggle</button>
        <hr />
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/theme" component={ThemeDemoPage} />
      </div>
    );
  }
}

export default hot(module)(withStyles(styles)(App));
