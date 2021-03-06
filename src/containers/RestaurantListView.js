import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as firebase from 'firebase';

import {
  restaurantsLoad,
  buttonCouponOn,
  buttonCouponOff,
  buttonCouponNumAdd,
  buttonCouponNameModi
} from '../actions';
import { Loading } from '../components/common';

class RestaurantListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dashboard: null,
      dbDetail: null,
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
    };
  }

  componentDidMount() {
    const rootRef = firebase.database().ref().child('restaurants');
    const dashboardRef = rootRef.child('dashboard');
    const infoRef = rootRef.child('info/all');

    dashboardRef.on('value', snapshot => {
      const DB = snapshot.val();
      const restaurantsArray = _.map(DB, (val, uid) => {
        return { ...val, uid };
      });
      restaurantsArray.sort((a, b) => {
        if (a.coupon > b.coupon) {
          return -1;
        } else if (a.coupon < b.coupon) {
          return 1;
        }
        return 0;
      });
      console.log(restaurantsArray);
      this.setState({ dashboard: restaurantsArray });
    });
    infoRef.on('value', snapshot => {
      const DB = snapshot.val();
      const infoArray = _.map(DB, (val, uid) => {
        return { ...val, uid };
      });
      this.setState({ dbDetail: infoArray });
    });
  }

  componentWillUnmount() {
    const rootRef = firebase.database().ref().child('restaurants/dashboard');
    const restRef = firebase.database().ref().child('restaurantsTest/인천/연수구/송도동');

    rootRef.off();
    restRef.off();
  }

  restaurantSort(x, arr, o) {
    if (x === o) {
      arr.sort((a, b) => {
        if (a[o] < b[o]) {
          return -1;
        } else if (a[o] > b[o]) {
          return 1;
        }
        return 0;
      });
    }
  }

  buttonSort(op) {
    const dashboard = this.state.dashboard;
    this.restaurantSort(op, dashboard, 'name');
    this.restaurantSort(op, dashboard, 'categorize');

    if (op === 'coupon') {
      dashboard.sort((a, b) => {
        if (a.admin.coupon > b.admin.coupon) {
          return -1;
        } else if (a.admin.coupon < b.admin.coupon) {
          return 1;
        }
        return 0;
      });
    }

    this.setState({ dashboard });
  }

  percentCalculator(x, b, s, g, p) {
    if (x) {
      return <span id="percent">({Math.floor((x / (b + s + g + p)) * 100)}%)</span>;
    }
    return null;
  }

  renderRestaurantTable() {
    if (this.state.dashboard) {
      const restaurants = this.state.dashboard;
      let num = 1;
      const result = restaurants.map(rest => {
        const b = rest.quantity.gray
        const s = rest.quantity.blue;
        const g = rest.quantity.purple
        const p = rest.quantity.gold
        const bU = rest.count.grayUse;
        const sU = rest.count.blueUse;
        const gU = rest.count.purpleUse;
        const pU = rest.count.goldUse;
        const bE = rest.count.grayExposure;
        const sE = rest.count.blueExposure;
        const gE = rest.count.purpleExposure;
        const pE = rest.count.goldExposure;

        return (
          <tr
            className={rest.coupon ? 'table-active' : 'table-danger'}
            key={rest.uid}
            onClick={() => this.setState({ detail: rest.uid, categorize: rest.categorize })}
          >
            <th scope="row">{num++}</th>
            <td>{rest.name}</td>
            <td>{rest.categorize}</td>
            <td>{b} {this.percentCalculator(b, b, s, g, p)}</td>
            <td>{s} {this.percentCalculator(s, b, s, g, p)}</td>
            <td>{g} {this.percentCalculator(g, b, s, g, p)}</td>
            <td>{p} {this.percentCalculator(p, b, s, g, p)}</td>
            <td>
              <span id="bronze">{bE} </span>
              <span id="silver">{sE} </span>
              <span id="gold">{gE} </span>
              <span id="platinum">{pE} </span>
              | {bE + sE + gE + pE}
            </td>
            <td>
              <span id="bronze">{bU} </span>
              <span id="silver">{sU} </span>
              <span id="gold">{gU} </span>
              <span id="platinum">{pU} </span>
              | {bU + sU + gU + pU}
            </td>
          </tr>
        );
      });
      return <tbody>{result}</tbody>;
    }
    return <tbody>{null}</tbody>;
  }

  renderRestaurantTableDetail() {
    const details = this.state.dbDetail;
    const result = details.find(detail => {
      return detail.uid === this.state.detail;
    });
    console.log(result);

    if (!this.state.detailModi) {
      return (
        <div className="detail-container">
          <div className="list-group">
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
            <li className="list-group-item">gray: {result.coupons[0]}</li>
            <li className="list-group-item">blue: {result.coupons[1]}</li>
            <li className="list-group-item">purple: {result.coupons[2]}</li>
            <li className="list-group-item">gold: {result.coupons[3]}</li>
            <li className="list-group-item">
              <div>
                <div className="form-div-items">
                  gray <input
                    type="number"
                    value={this.state.bronze}
                    onChange={e => this.setState({ bronze: e.target.value })}
                  />
                </div>
                <div className="form-div-items">
                  blue <input
                    type="number"
                    value={this.state.silver}
                    onChange={e => this.setState({ silver: e.target.value })}
                  />
                </div>
                <div className="form-div-items">
                  purple <input
                    type="number"
                    value={this.state.gold}
                    onChange={e => this.setState({ gold: e.target.value })}
                  />
                </div>
                <div className="form-div-items">
                  gold <input
                    type="number"
                    value={this.state.platinum}
                    onChange={e => this.setState({ platinum: e.target.value })}
                  />
                </div>
              </div>
              <button
                className="btn"
                onClick={() => this.props.buttonCouponNumAdd(
                  result.city,
                  result.gu,
                  result.dong,
                  result.categorize,
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
            </div>
          </div>
        );
    }
    return (
      <div className="detail-container">
        <div className="list-group">
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
          <li className="list-group-item">{this.state.detail}</li>
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
          </div>
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
            onClick={() => this.buttonSort('coupon')}
          >
            쿠폰순
          </button>
          <button
            className="btn btn-fixed"
            onClick={() => this.buttonSort('categorize')}
          >
            분류순
          </button>
          <button
            className="btn btn-fixed"
            onClick={() => this.buttonSort('name')}
          >
            이름순
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
              <th>노출</th>
              <th>사용</th>
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

export default connect(mapStateToProps, {
  restaurantsLoad,
  buttonCouponOn,
  buttonCouponOff,
  buttonCouponNumAdd,
  buttonCouponNameModi
})(RestaurantListView);
