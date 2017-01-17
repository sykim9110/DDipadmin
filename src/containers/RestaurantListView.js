import React, { Component } from 'react';
import { connect } from 'react-redux';

import { restaurantsLoad } from '../actions';

class RestaurantListView extends Component {
  componentDidMount() {
    this.props.restaurantsLoad();
  }

  render() {
    return (
      <div>하이 리스 트 뷰당</div>
    );
  }
}

export default connect(null, { restaurantsLoad })(RestaurantListView);
