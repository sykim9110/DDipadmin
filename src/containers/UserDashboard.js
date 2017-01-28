import _ from 'lodash';
import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs';
import * as firebase from 'firebase';

class UserDashboard extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    const rootRef = firebase.database().ref().child('profiles');
    rootRef.on('value', snap => {
      const result = _.map(snap.val(), (val, uid) => {
        return { ...val, uid };
      });
      this.setState({ data: result.length });
    });
  }

  render() {
    return (
      <div>
        <h3>회원 대시보드</h3>
        <div>
          <h5>총 회원수</h5>
          <p id="text_1">{this.state.data}명</p>
          <h5>총 쿠폰 발급횟수</h5>
          <p id="text_1">125232번</p>
          <h5>총 쿠폰 사용횟수</h5>
          <p id="text_1">12523번</p>
          <Bar data={data} options={option} width="600" height="250" />
          <Line data={lineData} options={option} width="600" height="250" />
        </div>
      </div>
    );
  }
}

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      fillColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
      ],
      strokeColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
      ],
      pointColor: 'rgba(255, 140, 105, 1)',
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(255, 140, 105, 1)',
    },
    {
      label: '# of Votes',
      data: [50, 20, 100, 40, 20, 10],
      fillColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
      ],
      strokeColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
      ],
      pointColor: 'rgba(255, 140, 105, 1)',
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(255, 140, 105, 1)',
  },

]
};
const lineData = {
  labels: ['11', '12', '13', '14', '15', '16', '17'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3, 4],
      fillColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
      ],
      strokeColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
      ],
      pointColor: 'rgba(255, 140, 105, 1)',
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(255, 140, 105, 1)',
    },
    {
      label: '# of Votes',
      data: [50, 20, 100, 40, 20, 10, 2],
      fillColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
      ],
      strokeColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
      ],
      pointColor: 'rgba(255, 140, 105, 1)',
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(255, 140, 105, 1)',
    },
  ]
};
const option = {
  options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
  }
};

export default UserDashboard;
