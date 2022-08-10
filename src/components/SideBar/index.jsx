/* eslint-disable react/function-component-definition */

import './styles.scss';

import { Link } from 'react-router-dom';

const SideBar = ({ style, handleMenu }) => (
  <div className={`sideBar ${style}`}>
    <div className="container-tabs">
      <button type="button" className="close-container" onClick={handleMenu}>
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

export default SideBar;
