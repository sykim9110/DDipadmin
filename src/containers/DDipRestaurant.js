import React, { Component } from 'react';
import { Link } from 'react-router';

class DDipRestaurant extends Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-items">
          <Link to="/restaurant/dashboard" className="btn">
            대시보드
          </Link>
          <Link to="/restaurant/list" className="btn">
            식당 리스트
          </Link>
          <Link to="/restaurant/add" className="btn">
            식당 추가
          </Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default DDipRestaurant;
