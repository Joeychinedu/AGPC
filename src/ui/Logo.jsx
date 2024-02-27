import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo({ color }) {
  return (
    <Link to="/">
      <div className={styles.logo}>
        <img src="../../images/AgpcLogo.png" alt="Agpc logo" />
        <p style={{ color }}>The Solution ground</p>
      </div>
    </Link>
  );
}

export default Logo;
