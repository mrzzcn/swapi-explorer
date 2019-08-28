import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

import { get } from '../utils/http';
import SWAPI from '../utils/swapi';

interface IndexProps extends RouteComponentProps<{ foo?: string }> {}

interface IndexState {
  hello: string;
}

class IndexPage extends Component<IndexProps, IndexState> {
  /**
   *
   */
  constructor(props) {
    super(props);
    this.state = { hello: 'world' };
    console.log(this.props.match.params.foo);
  }

  componentDidMount() {
    get('https://swapi.co/api/', { hello: 'world', foo: 'bar' }).then(res => {
      console.log(res);
    });
    SWAPI.people().then(res => {
      console.log(res.results);
    });
    SWAPI.person(1).then(res => {
      console.log(res);
    });
  }

  render() {
    return (
      <div>
        <Link to="/">Home</Link> |&nbsp;
        <Link to="/theme">Theme</Link> |&nbsp;
        <Link to="/about">About</Link>
        <hr />
        Hello {this.state.hello}
      </div>
    );
  }
}

export default IndexPage;
