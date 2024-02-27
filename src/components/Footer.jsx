import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

import Logo from "../ui/Logo";
import styles from "./Footer.module.css";

const currentYear = new Date().getFullYear();

function Footer() {
  const [isFacebookHovered, setIsFacebookHovered] = useState(false);
  const [isInstagramHovered, setIsInstagramHovered] = useState(false);
  const [isYoutubeHovered, setIsYoutubeHovered] = useState(false);

  return (
    <div className={styles.footer}>
      <div className={styles.footerFirst}>
        <Logo color="#fff" />
        <span className={styles.address}>
          1 Bakare Avenue,
          <br />
          Palmgroove, Lagos Nigeria
          <br />
          <a className={styles.phone} href="tel:+234813001098">
            0813 000 1098
          </a>
        </span>
        <p className={styles.reference}>Built with 🙏 by the Agpc media team</p>
        <p className={styles.rights}>
          <span className={styles.copy}>&copy;</span>
          <span>{currentYear}</span> AGPC. All rights reserved.
        </p>
      </div>

      <ul className={styles.footerSecond}>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/sermon">
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
        <div className={styles.icons}>
          <a
            href="https://www.facebook.com/share/Dnm8HWC1WwVdXNcv/?mibextid=eQY6cl"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook
              style={{
                color: isFacebookHovered ? "#4467ca" : "#fff",
                fontSize: "4rem",
                transition: "all .3s",
              }}
              onMouseEnter={() => setIsFacebookHovered(true)}
              onMouseLeave={() => setIsFacebookHovered(false)}
            />
          </a>
          <a
            href="https://www.instagram.com/agpcng?igsh=d3l0bWg2ZTF4amQ2"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram
              style={{
                color: isInstagramHovered ? "#FDD362" : "#fff",
                fontSize: "4rem",
                transition: "all .3s",
              }}
              onMouseEnter={() => setIsInstagramHovered(true)}
              onMouseLeave={() => setIsInstagramHovered(false)}
            />
          </a>
          <a
            href="https://youtube.com/@AmazingGraceTv12?si=oZf5zChhKknILQ-f"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube
              style={{
                color: isYoutubeHovered ? "#FB0007" : "#fff",
                fontSize: "4rem",
                transition: "all .3s",
              }}
              onMouseEnter={() => setIsYoutubeHovered(true)}
              onMouseLeave={() => setIsYoutubeHovered(false)}
            />{" "}
          </a>
        </div>
      </ul>
    </div>
  );
}

export default Footer;
