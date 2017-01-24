import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/user" className="btn">
        회원관리
      </Link>
      <Link to="/restaurant" className="btn">
        식당관리
      </Link>
    </div>
  );
};

export { Navbar };
