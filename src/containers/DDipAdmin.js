import React, { Component } from 'react';
import DDipHeader from '../components/DDipHeader';
import { Sidebar } from '../components/common';

class DDipAdmin extends Component {
  render() {
    return (
      <div className="container-fluid">
        <DDipHeader />
        <div className="row">
          <Sidebar />
          <div id="SY-content" className="col-10">
            {this.props.children}
          </div>
        </div>
        <div id="SY-footer" className="row">
        </div>
      </div>
    );
  }
}

export default DDipAdmin;
