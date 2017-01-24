import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  restaurantsLoad,
  buttonCouponOn,
  buttonCouponOff,
  buttonCouponNumAdd,
  buttonCouponNameModi
} from '../actions';
import { Loading } from '../components/common';

class RestaurantListView extends Component {
  state = {
    detail: false,
    detailModi: false,
    categorize: '',
    table: null,
    bronze: 0,
    silver: 0,
    gold: 0,
    platinum: 0,
    bronzeName: '',
    silverName: '',
    goldName: '',
    platinumName: ''
  }

  componentWillMount() {
    this.props.restaurantsLoad();
  }

  componentWillReceiveProps(nextProps) {
    this.renderRestaurantTable(nextProps.data);
  }

  renderRestaurantTable(data) {
    if (data) {
      const restaurants = data;
      let num = 1;
      const result = restaurants.map(rest => {
        return (
          <tr
            className={rest.admin.coupon ? 'table-active' : 'table-danger'}
            key={rest.uid}
            onClick={() => this.setState({ detail: rest.uid, categorize: rest.categorize })}
          >
            <th scope="row">{num++}</th>
            <td>{rest.name}</td>
            <td>{rest.categorize}</td>
            <td>{rest.admin.bronzeCoupon}</td>
            <td>{rest.admin.silverCoupon}</td>
            <td>{rest.admin.goldCoupon}</td>
            <td>{rest.admin.platinumCoupon}</td>
          </tr>
        );
      });
      this.setState({ table: <tbody>{result}</tbody> });
    }
    return <tbody></tbody>;
  }

  renderRestaurantTableDetail() {
    const details = this.props.detail;
    const result = details.find(detail => {
      return detail.uid === this.state.detail;
    });

    if (!this.state.detailModi) {
      return (
        <div className="detail-container">
          <ul className="list-group">
            <li className="list-group-item">
              <button
                className="btn"
                onClick={() => this.props.buttonCouponOn(this.state.detail)}
              >
                쿠폰 사용 ON
              </button>
              <button
                className="btn"
                onClick={() => this.props.buttonCouponOff(this.state.detail)}
              >
                쿠폰 사용 OFF
              </button>
            </li>
            <li className="list-group-item">{result.name}</li>
            <li className="list-group-item">{result.phone}</li>
            <li className="list-group-item">{result.address}</li>
            <li className="list-group-item">{result.storedayString}</li>
            <li className="list-group-item">{`${result.storehourString[0]}~${result.storehourString[1]}`}</li>
            <li className="list-group-item">브론즈: {result.coupons[0]}</li>
            <li className="list-group-item">실버: {result.coupons[1]}</li>
            <li className="list-group-item">골드: {result.coupons[2]}</li>
            <li className="list-group-item">플래티넘: {result.coupons[3]}</li>
            <li className="list-group-item">
              <div>
                <div className="form-div-items">
                  브 <input
                    type="number"
                    value={this.state.bronze}
                    onChange={e => this.setState({ bronze: e.target.value })}
                  />
                </div>
                <div className="form-div-items">
                  실 <input
                    type="number"
                    value={this.state.silver}
                    onChange={e => this.setState({ silver: e.target.value })}
                  />
                </div>
                <div className="form-div-items">
                  골 <input
                    type="number"
                    value={this.state.gold}
                    onChange={e => this.setState({ gold: e.target.value })}
                  />
                </div>
                <div className="form-div-items">
                  플 <input
                    type="number"
                    value={this.state.platinum}
                    onChange={e => this.setState({ platinum: e.target.value })}
                  />
                </div>
              </div>
              <button
                className="btn"
                onClick={() => this.props.buttonCouponNumAdd(
                  this.state.detail,
                  this.state.bronze,
                  this.state.silver,
                  this.state.gold,
                  this.state.platinum
                )}
              >
                쿠폰 수량 추가하기
              </button>
              </li>
              <li className="list-group-item">
                <button
                  className="btn"
                  onClick={() => this.setState({ detailModi: true })}
                >
                  수정
                </button>
                <button
                  className="btn"
                  onClick={() => this.setState({ detail: false })}
                >
                  삭제
                </button>
                <button
                  className="btn"
                  onClick={() => this.setState({
                    detail: false,
                    detailModi: false,
                    silver: 0,
                    bronze: 0,
                    gold: 0,
                    platinum: 0,
                    bronzeName: '',
                    silverName: '',
                    goldName: '',
                    platinumName: ''
                  })}
                >
                  끄기
                </button>
              </li>
            </ul>
          </div>
        );
    }
    return (
      <div className="detail-container">
        <ul className="list-group">
          <li className="list-group-item">
            <button
              className="btn"
              onClick={() => this.props.buttonCouponOn(this.state.detail)}
            >
              쿠폰 사용 ON
            </button>
            <button
              className="btn"
              onClick={() => this.props.buttonCouponOff(this.state.detail)}
            >
              쿠폰 사용 OFF
            </button>
          </li>
          <li className="list-group-item">{result.name}</li>
          <li className="list-group-item">{result.phone}</li>
          <li className="list-group-item">{result.address}</li>
          <li className="list-group-item">{result.storedayString}</li>
          <li className="list-group-item">{`${result.storehourString[0]}~${result.storehourString[1]}`}</li>
          <li className="list-group-item">
            브론즈: <input
              placeholder={result.coupons[0]}
              type="text"
              value={this.state.bronzeName}
              onChange={e => this.setState({ bronzeName: e.target.value })}
            />
          </li>
          <li className="list-group-item">
            실버: <input
              placeholder={result.coupons[1]}
              type="text"
              value={this.state.silverName}
              onChange={e => this.setState({ silverName: e.target.value })}
            />
          </li>
          <li className="list-group-item">
            골드: <input
              placeholder={result.coupons[2]}
              type="text"
              value={this.state.goldName}
              onChange={e => this.setState({ goldName: e.target.value })}
            />
          </li>
          <li className="list-group-item">
            플래티넘: <input
              placeholder={result.coupons[3]}
              type="text"
              value={this.state.platinumName}
              onChange={e => this.setState({ platinumName: e.target.value })}
            />
          </li>
            <li className="list-group-item">
              <button
                className="btn"
                onClick={() => this.setState({ detailModi: false })}
              >
                수정 취소
              </button>
              <button
                className="btn"
                onClick={() => this.props.buttonCouponNameModi(
                  this.state.detail,
                  this.state.categorize,
                  this.state.bronzeName,
                  this.state.silverName,
                  this.state.goldName,
                  this.state.platinumName
                )}
              >
                수정
              </button>
              <button
                className="btn"
                onClick={() => this.setState({
                  detail: false,
                  detailModi: false,
                  silver: 0,
                  bronze: 0,
                  gold: 0,
                  platinum: 0,
                  bronzeName: '',
                  silverName: '',
                  goldName: '',
                  platinumName: ''
                })}
              >
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
      <div className="container">
        <h3>식당 리스트</h3>
        <div className="navbar">
          <button
            className="btn btn-fixed"
            onClick={() => this.props.restaurantsLoad()}
          >
            새로고침
          </button>
          <button
            className="btn btn-fixed"
            onClick={() => this.props.restaurantsLoad('categorize')}
          >
            분류순
          </button>
          <button
            className="btn btn-fixed"
            onClick={() => this.props.restaurantsLoad('name')}
          >
            이름순
          </button>
          <button
            className="btn btn-fixed"
            onClick={() => this.props.restaurantsLoad('register')}
          >
            등록순
          </button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>이름</th>
              <th>분류</th>
              <th>브론즈</th>
              <th>실버</th>
              <th>골드</th>
              <th>플래티넘</th>
            </tr>
          </thead>
          {this.state.table}
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

export default connect(mapStateToProps, {
  restaurantsLoad,
  buttonCouponOn,
  buttonCouponOff,
  buttonCouponNumAdd,
  buttonCouponNameModi
})(RestaurantListView);
