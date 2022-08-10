import { Link } from 'react-router-dom';
import { useState } from 'react';

import './styles.scss';

import SideBar from '../SideBar';

function Header() {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="container-header">
      <div className="header">
        <div className="header-tabs">
          <Link to="/" className="tab">
            <div className="tab-home">HOME</div>
          </Link>
          <Link to="/about" className="tab">
            <div className="tab-about">ABOUT</div>
          </Link>
        </div>
        <div className="header-logo">
          <Link to="/" className="tab">
            <h1>SHOP</h1>
          </Link>
        </div>
        <div className="header-menu">
          <button type="button" onClick={handleMenu}>Menu</button>
        </div>
      </div>
      <SideBar style={open ? 'sideBar-open' : ''} handleMenu={handleMenu} />
    </div>
  );
}

export default Header;
