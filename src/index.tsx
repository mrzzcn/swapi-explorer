import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router';
import { BrowserRouter as  Router } from 'react-router-dom';
import App from './App';

function Index() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));
