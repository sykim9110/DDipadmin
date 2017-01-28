import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <div className="navbar navbar-header">
      <Link to="/user" className="btn btn-header">
        회원관리
      </Link>
      <Link to="/restaurant" className="btn btn-header">
        식당관리
      </Link>
    </div>
  );
};

export { Navbar };
