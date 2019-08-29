import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './redux/store';

import AppTheme from './components/AppTheme';

function Index() {
  return (
    <Provider store={store}>
      <AppTheme>
        {({ toggle }) => (
          <Router>
            <Switch>
              <Route path="/" component={() => <App toggle={toggle} />} />
            </Switch>
          </Router>
        )}
      </AppTheme>
    </Provider>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));
