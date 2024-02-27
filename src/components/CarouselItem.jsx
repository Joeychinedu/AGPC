import { Link } from "react-router-dom";
import styles from "./CarouselItem.module.css";

function CarouselItem({ img, text, name, link, linkText }) {
  return (
    <div className={styles.carouselItemContainer}>
      <Link to={link}>
        <img className={styles.img} src={`../../images/${img}`} alt="" />
      </Link>
      <blockquote className={styles.text}>{text}</blockquote>
      <span className={styles.name}>- {name}</span>
      {link && (
        <Link to={link}>
          <span className={styles.link}>{linkText}</span>
        </Link>
      )}
    </div>
  );
}

export default CarouselItem;
