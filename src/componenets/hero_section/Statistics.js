import React from "react";
import styles from "./Statistics.module.scss";
import CommunityIcon from "../../assests/images/icon-communities.svg"
import MessageIcon from "../../assests/images/icon-messages.svg"

const Statistics = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.left_section}>
        <img src={CommunityIcon} alt={`${CommunityIcon}`} />
        <span className={styles.value_container}>1.4k+</span>
        <p className={styles.discription}>communities formed</p>
      </div>
      <div className={styles.right_section}>
      <img src={MessageIcon} alt={`${MessageIcon}`} />
        <span className={styles.value_container}>2.7m+</span>
        <p className={styles.discription}>message sent</p>
      </div>
    </div>
  );
};

export default Statistics;
