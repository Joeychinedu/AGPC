import { Link, Outlet } from "react-router-dom";
import styles from "./AboutHeader.module.css";

import Headroom from "react-headroom";

function AboutHeader({ title }) {
  return (
    <div>
      <Headroom pinStart={10}>
        <div className={styles.header}>
          <h2>{title}</h2>
          <ul>
            <Link to="/about">
              <li>About us</li>
            </Link>
            <Link to="/beliefs">
              <li>Our beliefs</li>
            </Link>
            <Link to="/story">
              <li>Our story</li>
            </Link>
            {/* <Link to="/give">
              <li>Give</li>
            </Link>
            <Link to="/help">
              <li>Support</li>
            </Link> */}
          </ul>
        </div>
      </Headroom>

      <Outlet />
    </div>
  );
}

export default AboutHeader;
