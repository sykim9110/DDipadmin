import React, { Component } from 'react';
import { Navbar } from '../components/common';

class DDipAdmin extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <h1>밥정너 관리자</h1>
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
