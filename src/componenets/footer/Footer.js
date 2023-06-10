import React from "react";
import styles from "./Footer.module.scss";
import BackgroundCover from "../../assests/images/bg-footer-top-desktop.svg";
import LogoIcon from "../../assests/images/w.svg";
import PhoneIcon from "../../assests/images/icon-phone.svg";
import EmailIcon from "../../assests/images/icon-email.svg";

const Footer = () => {
  return (
    <div className={styles.main_container}>
      <img
        src={BackgroundCover}
        alt={`${BackgroundCover}`}
        className={styles.cover_img}
      />
      <div className={styles.content_container}>
        <div className={styles.left_side}>
          <div className={styles.inside_left}>
            <img src={LogoIcon} alt="logo" className={styles.logo} />
            <p>Think of the insightful conversations you miss feedback form.</p>
            <div className={styles.flex_container}>
              <img src={PhoneIcon} alt="phone-icon" width={19} height={14} />
              <p>Phone: +1-543-123-4567</p>
            </div>
            <div className={styles.flex_container}>
              <img src={EmailIcon} alt="email-icon" width={19} height={14} />
              <p>Phone: +1-543-123-4567</p>
            </div>
          </div>
        </div>
        <div className={styles.right_section}>
          <h5>newsletter</h5>
          <p>Think of the insightful conversations you miss feedback form.</p>
          <div>
            <input />
            <button>subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
