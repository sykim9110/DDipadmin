import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Bar } from 'react-chartjs';

import { dashboardRestaurantsLoad } from '../actions';

class RestaurantDashboard extends Component {
  state = {
    revenue: null
  }

  componentWillMount() {
    this.props.dashboardRestaurantsLoad();
  }

  renderRevenue() {
    if (this.props.data) {
      const { ko, ja, zh, en, sc, ch, pi, as } = this.props.data;
      const sum = ko.length + zh.length + ja.length +
      en.length + sc.length + ch.length + pi.length + as.length;
      const revenue = sum * 30000;
      this.setState({ revenue });
    }
  }

  renderChart() {
    if (this.props.data) {
      const { ko, ja, zh, en, sc, ch, pi, as } = this.props.data;
      const chartdata = {
        labels: ['한식', '중식', '일식', '양식', '분식', '치킨', '피자', '아시아퓨전'],
        datasets: [{
          label: '가입수',
          data: [
            ko.length,
            zh.length,
            ja.length,
            en.length,
            sc.length,
            ch.length,
            pi.length,
            as.length
          ],
          fillColor: [
            'rgba(255, 140, 105, 0.1)',
          ],
          strokeColor: [
            'rgba(255, 140, 105, 0.8)',
          ],
          pointColor: 'rgba(255, 140, 105, 1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(255, 140, 105, 1)',
        }]
      };

      return <Bar data={chartdata} width="400" height="400" />;
    }
    return null;
  }

  render() {
    return (
      <div>
        <h3>식당 대시보드</h3>
        <div>
          {this.renderChart()}
        </div>
        {this.props.data &&
          (
            <div>
              <button
                className="btn"
                onClick={this.renderRevenue.bind(this)}
              >
                월 수익 계산
              </button>
              {this.state.revenue && <h5>{this.state.revenue}원</h5>}
            </div>
          )
        }
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  const { data } = state.restaurantDashboard;

  return { data };
};

export default connect(mapStateToProps, { dashboardRestaurantsLoad })(RestaurantDashboard);
