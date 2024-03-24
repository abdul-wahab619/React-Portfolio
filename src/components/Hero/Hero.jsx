import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import React from "react";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Abdul Wahab</h1>
        <p className={styles.description}>
          I'm a full-stack developer with over 2 years of experience of MERN.
          Reach out if you'd like to learn more!
        </p>
        <a href="mailto:awminhas619@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        className={styles.heroImage}
        alt="hero-image"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
