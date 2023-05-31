import { Link } from "react-router-dom";

import "./Tabs.css";

const Tabs = () => {
  return (
    <nav className="tabs">
      <ul className="tabs-list">
        <li className="tabs-item">
          <Link to="/" className="tabs-link">
            All
          </Link>
        </li>
        <li className="tabs-item">
          <Link to="/active" className="tabs-link">
            Active
          </Link>
        </li>
        <li className="tabs-item">
          <Link to="/inactive" className="tabs-link">
            Inactive
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Tabs;
