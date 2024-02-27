import styles from "./Overview.module.css";

function Overview({ header, text, btnText, img }) {
  return (
    <div
      className={styles.overview}
      style={{
        backgroundImage: `linear-gradient(to right bottom, rgba(0,100,60,.5) 0%, rgba(0,100,60, .7) 100%),url(../../images/${img})`,
      }}
    >
      <h2>{header}</h2>
      {text && <p>{text}</p>}
      <button>{btnText}</button>
    </div>
  );
}

export default Overview;
