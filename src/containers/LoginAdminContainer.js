import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginAdmin from '../components/LoginAdmin';
import { loginUser } from '../actions';

class LoginAdminContainer extends Component {
  AdminloginUser() {
    const { values } = this.props.Admin;
    console.log('adminloginuser', values);
    this.props.loginUser(values.id, values.password);
  }

  render() {
    console.log('loginAdmin', this.props);
    return (
      <LoginAdmin admin={this.AdminloginUser.bind(this)} />
    );
  }
}

const mapStateToProps = (state) => {
  const { Admin } = state.form;

  return { Admin };
};

export default connect(mapStateToProps, { loginUser })(LoginAdminContainer);
