import styles from "./Content.module.css";
import Button from "../ui/ButtonPrimary";

function Content({ backgroundImage, title, text, gColor, buttonText, to }) {
  return (
    <div
      className={styles.content}
      style={{
        backgroundImage: `linear-gradient( to bottom, transparent, ${gColor}), url(${`../../images/${backgroundImage}`})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={styles.contentInner}>
        <h2>{title}</h2>
        <p>{text}</p>
        <Button text={buttonText} to={to} />
      </div>
    </div>
  );
}

export default Content;
