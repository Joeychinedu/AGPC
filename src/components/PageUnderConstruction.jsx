import { BiSolidError } from "react-icons/bi";
import styles from "./PageUnderConstruction.module.css";
import { Link } from "react-router-dom";

function PageUnderConstruction() {
  return (
    <div className={styles.puc}>
      <BiSolidError
        // color="#d04441"
        size={65}
        color="#FFD700"
      />
      <h2>Page Under Construction</h2>
      <h4>Pardon our dust!</h4>
      <p>
        Oops! This page is still a work in progress. We're working hard to bring
        you the content you're looking for. Please{" "}
        <span>
          <Link to="/">click here</Link>
        </span>{" "}
        to go back to our homepage.
      </p>
    </div>
  );
}

export default PageUnderConstruction;
