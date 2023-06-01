import { Link, useLocation } from "react-router-dom";

import "./Tabs.css";

const activeTabStyle = {
  color: "var(--dark-blue)",
};

const Tabs = () => {
  const location = useLocation().pathname;

  return (
    <nav className="tabs">
      <ul className="tabs-list">
        <li className="tabs-item">
          <Link
            to="/all"
            className="tabs-link"
            style={location === "/all" ? activeTabStyle : {}}
          >
            All
          </Link>
        </li>
        <li className="tabs-item">
          <Link
            to="/active"
            className="tabs-link"
            style={location === "/active" ? activeTabStyle : {}}
          >
            Active
          </Link>
        </li>
        <li className="tabs-item">
          <Link
            to="/inactive"
            className="tabs-link"
            style={location === "/inactive" ? activeTabStyle : {}}
          >
            Inactive
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Tabs;
