import styles from "./Header.module.css";
import Logo from "../ui/Logo";
import { Link } from "react-router-dom";

function Header({ bgColor, bgImage, color }) {
  return (
    <div
      className={styles.header}
      style={{
        backgroundColor: bgColor,
        backgroundImage: bgImage,
        color,
      }}
    >
      <Logo />
      <ul>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/sermons">
          <li>Sermon</li>
        </Link>
        <Link to="/foundation">
          <li>Foundation</li>
        </Link>
        <Link to="/give">
          <li>Give</li>
        </Link>
        <Link to="/help">
          <li>Support</li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
