import React, { Component } from 'react';
import { connect } from 'react-redux';

import { restaurantsLoad } from '../actions';
import { Loading } from '../components/common';

class RestaurantListView extends Component {
  state = {
    detail: false
  }

  componentDidMount() {
    this.props.restaurantsLoad();
  }

  renderRestaurantTable() {
    if (this.props.data) {
      const restaurants = this.props.data;
      let num = 1;
      const result = restaurants.map(rest => {
        return (
          <tr className={rest.admin.coupon ? "table-active" : "table-danger"} key={rest.uid} onClick={e => this.setState({ detail: rest.uid })}>
            <th scope="row">{num++}</th>
            <td>{rest.name}</td>
            <td>{rest.categorize}</td>
            <td>{rest.admin.bronzeCoupon}</td>
            <td>{rest.admin.silverCoupon}</td>
            <td>{rest.admin.goldCoupon}</td>
            <td>{rest.admin.silverCoupon}</td>
            <td><button className="btn">온</button></td>
          </tr>
        );
      });
      return (
        <tbody>{result}</tbody>
      );
    }
    return <tbody></tbody>;
  }

  renderRestaurantTableDetail() {
    const details = this.props.detail;
    const result = details.find(detail => {
      return detail.uid === this.state.detail;
    });
    return (
      <div id="SY-restaurant-detail">
        <ul className="list-group">
          <li className="list-group-item">
            <button
              className="btn btn-success SY-restaurant-detail-button"
              onClick={() => this.setState({ detail: false })}>
              쿠폰 사용 ON
            </button>
            <button
              className="btn btn-warning SY-restaurant-detail-button"
              onClick={() => this.setState({ detail: false })}>
              쿠폰 사용 OFF
            </button>
          </li>
          <li className="list-group-item">{result.name}</li>
          <li className="list-group-item">{result.phone}</li>
          <li className="list-group-item">{result.address}</li>
          <li className="list-group-item">{result.storedayString}</li>
          <li className="list-group-item">{result.storehourString}</li>
          <li className="list-group-item">브론즈: {result.coupons[0]}</li>
          <li className="list-group-item">실버: {result.coupons[1]}</li>
          <li className="list-group-item">골드: {result.coupons[2]}</li>
          <li className="list-group-item">플래티넘: {result.coupons[3]}</li>
          <li className="list-group-item">
            <button className="btn btn-info SY-restaurant-detail-button">
              쿠폰 수량 추가하기
            </button>
          </li>
          <li className="list-group-item">
            <button
              className="btn btn-primary SY-restaurant-detail-button"
              onClick={() => this.setState({ detail: false })}>
              수정
            </button>
            <button
              className="btn btn-danger SY-restaurant-detail-button"
              onClick={() => this.setState({ detail: false })}>
              삭제
            </button>
            <button
              className="btn btn-Secondary SY-restaurant-detail-button"
              onClick={() => this.setState({ detail: false })}>
              끄기
            </button>
          </li>
        </ul>
      </div>
    );
  }

  render() {
    if (this.props.loading) {
      return <Loading />;
    }
    return (
      <div className="containers">
        <h3 id="SY-h3">식당 리스트</h3>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>이름</th>
              <th>분류</th>
              <th>브론즈</th>
              <th>실버</th>
              <th>골드</th>
              <th>플레티넘</th>
              <th>쿠폰 사용</th>
            </tr>
          </thead>
          {this.renderRestaurantTable()}
        </table>
        {this.state.detail ? this.renderRestaurantTableDetail() : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { loading, data, detail, err } = state.restaurantList;

  return { loading, data, detail, err };
};

export default connect(mapStateToProps, { restaurantsLoad })(RestaurantListView);
