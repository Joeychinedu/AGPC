import { Link } from "react-router-dom";
import styles from "./ButtonPrimary.module.css";

function ButtonPrimary({ text, to }) {
  return (
    <div>
      <Link to={to}>
        <button className={styles.btn}>{text}</button>
      </Link>
    </div>
  );
}

export default ButtonPrimary;
