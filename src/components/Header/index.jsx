import './styles.scss';

function Header() {
  return (
    <div className="container-header">
      <div className="header">
        <div className="header-tabs">
          <div className="tab-home">HOME</div>
          <div className="tab-about">ABOUT</div>
        </div>
        <div className="header-logo">
          <h1>SHOP</h1>
        </div>
        <div className="header-menu">
          <div>Menu</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
