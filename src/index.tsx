import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

import AppTheme from './components/AppTheme';

function Index() {
  return (
    <AppTheme>
      {({ toggle }) => (
        <Router>
          <Switch>
            <Route path="/" component={() => <App toggle={toggle} />} />
          </Switch>
        </Router>
      )}
    </AppTheme>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));
