import styles from "./VideoPlayer.module.css";

function VideoPlayer() {
  return (
    <div>
      <video
        className={styles.video}
        style={{
          objectFit: "cover",
          objectPosition: "center",
          minWidth: "100%",
          minHeight: "100%",
          height: "100%",
          opacity: "0.9",
        }}
        width="1280"
        height="720"
        loop
        autoPlay
        muted
        playsInline
      >
        <source src="../../home2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;
