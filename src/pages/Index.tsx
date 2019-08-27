import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

export default () => (
  <div>
    <Link to="/">Home</Link> |&nbsp;
    <Link to="/about">About</Link>
    <hr />
    Hello World
  </div>
);
