import { Link } from 'react-router-dom';

import './styles.scss';

function Header() {
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
          <div>Menu</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
