import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logged } from '../actions';
import Loading from '../components/Loading';
import LoginAdmin from '../components/LoginAdmin';

class DDipAdmin extends Component {
  componentWillMount() {
    this.props.logged();
  }

  render() {
    if (this.props.loading) {
      console.log('test');
      return <Loading />;
    }
    if (!this.props.isLoggedIn) {
      return (
        <LoginAdmin />
      );
    }
    return (
      <div>
        <div className="container-fluid">
          <div id="SY-header" className="row">
            <div style={{ width: 100 }}>
              <img id="SY-img-ddip" alt="ddip" src="https://firebasestorage.googleapis.com/v0/b/logic-f71cb.appspot.com/o/ddip_admin.png?alt=media&token=a2756946-e6ee-42d6-ba1a-d4445c14c64b" />
            </div>
          </div>
          <div className="row">
            <div id="nav" className="col-lg-2 col-xl-2">
              <div className="col align-self-center">
                <h2 style={{ color: '#4d4f51' }}>통계</h2>
              </div>
              <div className="col align-self-center">
                <img alt="ddip" src="https://firebasestorage.googleapis.com/v0/b/logic-f71cb.appspot.com/o/user.png?alt=media&token=7ac80135-d03d-4129-a5d3-3bb3013458be" />
                <h2 style={{ color: '#4d4f51' }}>회원</h2>
              </div>
              <div className="col align-self-center">restaurant</div>
            </div>
            <div id="content" className="col col-md-12 col-lg-10 col-xl-10">
              <div>asdasd</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const select = (state) => {
  const { isLoggedIn, loading, id } = state.user;

  return { isLoggedIn, loading, id };
};

export default connect(select, { logged })(DDipAdmin);
