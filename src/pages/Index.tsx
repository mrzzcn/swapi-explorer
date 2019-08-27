import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

import { get } from '../utils/http';

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
    get('https://swapi.co/api/', {}).then(res => {
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
