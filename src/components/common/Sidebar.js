import React from 'react';
import { Link } from 'react-router';

const Sidebar = () => {
  return (
    <div id="SY-sidebar" className="col">
      <div>
        <nav className="nav flex-column">
          <Link to="/dashboard" className="nav-link">
            대시 보드
          </Link>
          <Link to="/analytics" className="nav-link">
            분석
          </Link>
          <Link to="/statement" className="nav-link">
            통계
          </Link>
          <Link to="/user" className="nav-link">
            회원 관리
          </Link>
          <Link to="/restaurant" className="nav-link">
            식당 관리
          </Link>
        </nav>
      </div>
    </div>
  );
};

export { Sidebar };
