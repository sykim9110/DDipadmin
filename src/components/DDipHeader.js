import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onClickLogout } from '../actions';
import { Header } from './common';

class DDipHeader extends Component {
  logout() {
    this.props.onClickLogout();
  }

  render() {
    return (
      <Header logout={this.logout.bind(this)} />
    );
  }
}

export default connect(null, { onClickLogout })(DDipHeader);
