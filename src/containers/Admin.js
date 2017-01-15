import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onClickLogout } from '../actions';

import { Header } from '../components/common';

class Admin extends Component {
  logout() {
    this.props.onClickLogout();
  }

  render() {
    return (
      <div className="container-fluid">
        <Header logout={this.logout.bind(this)} />
        <div className="row">
          <div id="nav" className="col-lg-2 col-xl-2">
            <div className="col align-self-center">
              <h2 style={{ color: '#4d4f51' }}>통계</h2>
            </div>
            <div className="col align-self-center">
              <img alt="ddip" src="https://firebasestorage.googleapis.com/v0/b/logic-f71cb.appspot.com/o/user.png?alt=media&token=7ac80135-d03d-4129-a5d3-3bb3013458be" />
              <h2 style={{ color: '#4d4f51' }}>회원</h2>
            </div>
            <div className="col align-self-center">restaurant</div>
          </div>
          <div id="content" className="col col-md-12 col-lg-10 col-xl-10">
            <div>asdasd</div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { onClickLogout })(Admin);
