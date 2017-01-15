import React from 'react';
import Off from '../svg/off';

const Header = ({ logout }) => {
  return (
    <div id="SY-header" className="row">
      <div style={{ width: 200 }}>
        <img id="SY-img-ddip" alt="ddip" src="https://firebasestorage.googleapis.com/v0/b/logic-f71cb.appspot.com/o/ddip_admin.png?alt=media&token=a2756946-e6ee-42d6-ba1a-d4445c14c64b" />
      </div>
      <div id="SY-header-button" onClick={logout}>
        <Off />
      </div>
    </div>
  );
};

export { Header };
