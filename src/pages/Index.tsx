import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import People from 'swapi-typescript/dist/models/People';

import { AppState } from '../redux/store';
import { State as PeopleState } from '../redux/people/index';
import { setPerson, appendPeople } from '../redux/people/actions';

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

const dispatchAction = {};

type injectDispatch = {
  dispatch: Dispatch;
};

type IProps = IndexProps & stateProps & typeof dispatchAction & injectDispatch;

class IndexPage extends Component<IProps, IndexState> {
  /**
   *
   */
  constructor(props) {
    super(props);
    this.state = { hello: 'world' };
  }

  componentDidMount() {
    this.props.dispatch({ type: 'PEOPLE_FETCH_REQUESTED' });
    this.props.dispatch({ type: 'PERSON_FETCH_REQUESTED', payload: 1 });
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
        Total: {people.total} <br />
        Current: {people.current ? people.current.name : '--'}
      </div>
    );
  }
}

export default connect(
  mapStateToProps
)(IndexPage);
