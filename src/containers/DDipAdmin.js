import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar } from '../components/common';

class DDipAdmin extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Link to="/" className="link-none">
            <h1>밥정너 관리자</h1>
          </Link>
        </div>
        <Navbar />
        <div>
          <div className="content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default DDipAdmin;
