import React, { Component } from 'react';
import { connect } from 'react-redux';
import { restaurantCreate } from '../actions';
import RestaurantForm from '../components/RestaurantForm';

class RestaurantRegister extends Component {
  restaurantAdd() {
    this.props.restaurantCreate(this.props.restaurant, this.props.menu);
  }

  render() {
    return (
      <RestaurantForm
        onClickRestaurantAdd={this.restaurantAdd.bind(this)}
        loading={this.props.loading}
        message={this.props.message}
        err={this.props.err}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { restaurant, menu } = state.form;
  console.log(state.form.menu);
  const { loading, message, err } = state.restaurantForm;

  return { restaurant, menu, loading, message, err };
};

export default connect(mapStateToProps, { restaurantCreate })(RestaurantRegister);
