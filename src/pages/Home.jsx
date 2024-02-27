import styles from "./Home.module.css";
import VideoPlayer from "../components/VideoPlayer";
import Content from "../components/Content";
import Button from "../ui/ButtonPrimary";
import Carousel from "../components/Carousel";

function Home() {
  return (
    <div className={styles.home}>
      {/* Hero */}
      <div className={styles.overlay}>
        <div>
          <p>
            We want people worldwide to cultivate a daily, life-changing
            connection with Jesus
          </p>
          <button>Get Involved</button>
        </div>
      </div>
      <VideoPlayer />

      {/* Join-us */}
      <div className={`${styles.homeJoinUs} ${styles.homeGrid}`}>
        <div className={styles.homeJoinUsMain}>
          <div>
            <h2>Join us this Sunday</h2>
            <p>Every week, we gather in 4 countries across the world</p>
            <Button text={"Times and Locations"} to="locations" />
          </div>
        </div>
        <Content
          backgroundImage="dd.jpg"
          gColor={"#591b03bb"}
          // gColor={"#222"}
          text={
            "Experience the transformative power of daily declarations, align with God's promises and embrace renewed conviction in navigating life's journey."
          }
          title={"Daily declaration"}
          buttonText="Learn More"
          to="dd"
        />
        <Content
          backgroundImage="bishop-2.jpg"
          gColor={"#591b03bb"}
          // gColor={"#111"}
          text={
            "See what a Sunday at Agpc is really like. Check out a past message from our bishop"
          }
          title={"Watch Past Sermons"}
          buttonText="Watch Now"
          to="sermons"
        />
      </div>

      {/* Testimonies */}
      <div className={styles.testimonials}>
        <h2>Jesus Transforms All</h2>
        <Carousel />
      </div>

      {/* Products */}
      <div className={styles.products}>
        <div className={styles.productsInner}>
          <h2>We’re a church for the generations.</h2>
          <p>
            No matter what season of life you find yourself in, you belong here.
          </p>
        </div>
        <div className={styles.homeGrid}>
          <Content
            backgroundImage="kidsSing.jpg"
            // gColor={"#591b03bb"}
            gColor={"#222"}
            text={
              "We teach kids about Jesus on their level in a clean, safe environment."
            }
            title={"God's Kingdom Covenant Children"}
            buttonText="Learn More"
            to="kids"
          />
          <Content
            backgroundImage="teensMarching.jpg"
            // gColor={"#591b03bb"}
            gColor={"#333"}
            text={
              "We exist to graduate high school and university students into a lifetime of following Jesus."
            }
            title={"Teens and Youths"}
            buttonText="Learn More"
            to="teens"
          />
        </div>
      </div>

      {/* Foundation */}
      <div className={styles.foundation}>
        <h2>Discover Our Foundation</h2>
        <div className={styles.homeGrid}>
          <Content
            backgroundImage="greatlife.webp"
            // gColor={"#591b03bb"}
            gColor={"#222"}
            text={
              "Our foundation was born from a deep passion to offer hope to society's most vulnerable, including orphans, addicts, and the marginalized."
            }
            title={"Greatlife Changers International"}
            buttonText="Learn More"
            to="foundation/greatlife"
          />
          <Content
            backgroundImage="football.webp"
            // gColor={"#591b03bb"}
            gColor={"#222"}
            text={
              "Unite in faith and sportsmanship with our church football team!"
            }
            title={"AGPC Football"}
            buttonText="Learn More"
            to="foundation/football"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
