import React, { Component } from 'react';
import { Link } from 'react-router';

class DDipRestaurant extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <Link to="/restaurant/list">
            <button id="SY-restaurant-button" className="btn btn-primary">식당 리스트</button>
          </Link>
          <Link to="/restaurant/add">
            <button id="SY-restaurant-button" className="btn btn-primary">식당 추가</button>
          </Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default DDipRestaurant;
