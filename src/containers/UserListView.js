import _ from 'lodash';
import React, { Component } from 'react';
import * as firebase from 'firebase';

import { Loading } from '../components/common';

class UserListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userdata: null,
      loading: false
    };
  }

  componentWillMount() {
    const rootRef = firebase.database().ref().child('profiles');
    rootRef.on('value', snap => {
      const result = _.map(snap.val(), (val, uid) => {
        return { ...val, uid };
      });

      this.setState({ userdata: result });
    });
  }

  userdataTableRender() {
    let num = 1;
    if (this.state.userdata) {
      const { userdata } = this.state;
      const result = userdata.map(data => {
        return (
          <tr className="table-none" key={data.uid}>
            <th scope="row">{num++}</th>
            <td>{data.displayName}</td>
            <td>{data.email}</td>
            <td>{data.provider ? data.provider : 'email'}</td>
            <td>{data.couponCount ? data.couponCount : 0}</td>
            <td>{data.couponUseCount ? data.couponUseCount : 0}</td>
            <td>{data.gender && data.gender}</td>
            <td>{data.emailVerified ? '인증' : '미인증'}</td>
          </tr>
        );
      });
      return <tbody>{result}</tbody>;
    }
    return <tbody>{null}</tbody>;
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <div className="container">
        <h3>식당 리스트</h3>
        <div className="navbar">
          <button
            className="btn btn-fixed"
            // onClick={() => this.props.restaurantsLoad()}
          >
            새로고침
          </button>
          <button
            className="btn btn-fixed"
            // onClick={() => this.props.restaurantsLoad('categorize')}
          >
            분류순
          </button>
          <button
            className="btn btn-fixed"
            // onClick={() => this.props.restaurantsLoad('name')}
          >
            이름순
          </button>
          <button
            className="btn btn-fixed"
            // onClick={() => this.props.restaurantsLoad('register')}
          >
            등록순
          </button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>이름</th>
              <th>이메일</th>
              <th>제공사</th>
              <th>흔든 횟수</th>
              <th>사용 횟수</th>
              <th>성별</th>
              <th>인증</th>
            </tr>
          </thead>
          {this.userdataTableRender()}
        </table>
      </div>
    );
  }
}

export default UserListView;
