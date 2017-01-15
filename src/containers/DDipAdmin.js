import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logged } from '../actions';
import Loading from '../components/Loading';
import LoginAdminContainer from './LoginAdminContainer';
import Admin from './Admin';

class DDipAdmin extends Component {
  componentWillMount() {
    this.props.logged();
  }

  render() {
    if (this.props.loading) {
      return <Loading />;
    }
    if (!this.props.isLoggedIn) {
      return <LoginAdminContainer />;
    }
    return <Admin />;
  }
}

const select = (state) => {
  const { isLoggedIn, loading, id } = state.user;

  return { isLoggedIn, loading, id };
};

export default connect(select, { logged })(DDipAdmin);
