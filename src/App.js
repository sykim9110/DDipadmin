import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logged } from './actions';
import Loading from './components/Loading';
import LoginAdminContainer from './containers/LoginAdminContainer';
import DDipAdmin from './containers/DDipAdmin';

class App extends Component {
  componentWillMount() {
    this.props.logged();
  }

  logout() {
    this.props.onClickLogout();
  }

  render() {
    if (this.props.loading) {
      return <Loading />;
    }
    if (!this.props.isLoggedIn) {
      return <LoginAdminContainer />;
    }

    return <DDipAdmin children={this.props.children} />;
  }
}

const select = (state) => {
  const { isLoggedIn, loading, id } = state.user;

  return { isLoggedIn, loading, id };
};

export default connect(select, { logged })(App);
