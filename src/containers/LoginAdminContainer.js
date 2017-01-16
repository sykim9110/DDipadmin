import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginAdmin from '../components/LoginAdmin';
import { loginUser } from '../actions';

class LoginAdminContainer extends Component {
  AdminloginUser() {
    const { values } = this.props.Admin;
    this.props.loginUser(values.id, values.password);
  }

  render() {
    return (
      <LoginAdmin
        admin={this.AdminloginUser.bind(this)}
        err={this.props.err}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { Admin } = state.form;
  const { err } = state.user;

  return { Admin, err };
};

export default connect(mapStateToProps, { loginUser })(LoginAdminContainer);
