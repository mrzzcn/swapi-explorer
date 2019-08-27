import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

import AppTheme from './components/AppTheme';

function Index() {
  return (
    <Router>
      <Switch>
        <AppTheme>
          {({ toggle }) => (
            <>
              <Route path="/" component={() => <App toggle={toggle} />} />
            </>
          )}
        </AppTheme>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));
