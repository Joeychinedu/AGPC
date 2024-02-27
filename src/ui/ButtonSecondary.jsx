import { Link } from "react-router-dom";
import styles from "./ButtonSecondary.module.css";

function ButtonSecondary({ text }) {
  return (
    <div>
      <Link to="/sermon">
        <button className={styles.btn}>{text}</button>
      </Link>
    </div>
  );
}

export default ButtonSecondary;
