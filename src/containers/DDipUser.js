import React, { Component } from 'react';
import { Link } from 'react-router';

class DDipUser extends Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-items">
          <Link to="/user/dashboard" className="btn">
            대시보드
          </Link>
          <Link to="/user/list" className="btn">
            회원 리스트
          </Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default DDipUser;
