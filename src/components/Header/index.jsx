import { Link } from 'react-router-dom';
import { useState } from 'react';

import './styles.scss';

import SideBar from '../SideBar';

function Header() {
  const [open, setOpen] = useState();

  const HandleMenu = () => {
    const sideBar = document.querySelector('.sideBar');
    const buttonClose = document.querySelector('.close-container');

    console.log(open);
    setOpen(sideBar.classList.toggle('sideBar-open'));
    setOpen(buttonClose.addEventListener('click', HandleMenu));
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
          <button type="button" onClick={HandleMenu}>Menu</button>
        </div>
      </div>
      <SideBar />
    </div>
  );
}

export default Header;
