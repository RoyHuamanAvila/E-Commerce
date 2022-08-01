import './styles.scss';

import { Link } from 'react-router-dom';

function SideBar() {
  return (
    <div className="sideBar">
      <div className="container-tabs">
        <button type="button" className="close-container">
          X
        </button>
        <Link to="/" className="tab">
          <div className="tab-item">
            HOME
          </div>
        </Link>
        <Link to="/about" className="tab">
          <div className="tab-item">
            ABOUT
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
