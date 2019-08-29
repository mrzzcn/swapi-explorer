import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import People from 'swapi-typescript/dist/models/People';

import { AppState } from '../redux/store';
import { State as PeopleState } from '../redux/people/index';
import { setPerson, appendPeople } from '../redux/people/actions';
import { get } from '../utils/http';
import SWAPI from '../utils/swapi';

interface IndexProps extends RouteComponentProps<{ foo?: string }> {}

interface IndexState {
  hello: string;
}

function mapStateToProps(state: AppState) {
  return {
    people: state.people
  };
}

type stateProps = {
  people: PeopleState;
};

const dispatchAction = {
  appendPeople,
  setPerson
};

type IProps = IndexProps & stateProps & typeof dispatchAction;

class IndexPage extends Component<IProps, IndexState> {
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
      this.props.appendPeople({ people: res.results, next: res.next });
      console.log(res.results);
    });
    SWAPI.person(1).then(res => {
      console.log(res);
      this.props.setPerson(res);
    });
  }

  render() {
    const { people } = this.props;
    return (
      <div>
        <Link to="/">Home</Link> |&nbsp;
        <Link to="/theme">Theme</Link> |&nbsp;
        <Link to="/about">About</Link>
        <hr />
        Hello {this.state.hello}
        <hr />
        Total: {people.list.length} <br />
        Current: {people.current ? people.current.name : '--'}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  dispatchAction
)(IndexPage);
