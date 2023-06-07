import React from "react";
import styles from "./HeroSection.module.scss";
import HeroImg from "../../assests/images/screen-mockups.svg"
import Statistics from "./Statistics";

const HeroSection = () => {
  return (
    <section>
      <div className={styles.main_heading_container}>
        <h1>build the community your fans will love</h1>
        <div>
        <p>Huddle imagines the way we build community.You have a <span>voice,but so does your audience.Create connections with your</span><span>users as you engage in genuine discussion.</span></p>
        </div>
        <button>get started for free</button>
      </div>
      <div className={styles.Heroimg_container}>
        <img src={HeroImg} alt={`${HeroImg}`} />
      </div>
      <Statistics />
    </section>
  );
};

export default HeroSection;
