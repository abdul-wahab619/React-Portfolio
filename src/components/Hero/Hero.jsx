import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Abdul Wahab</h1>
        <p className={styles.description}>
          I'm a full-stack developer with over 2 years of experience of MERN.
          Reach out if you'd like to learn more!
        </p>
        <motion.a
          whileHover={{ scale: 1.2 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
          href="mailto:awminhas619@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </motion.a>
      </div>
      <motion.div
        className={styles.img}
        animate={{
          x: 80,
          y: 50,
          scale: 1,
          rotate: 0,
        }}
      >
        <img
          src={getImageUrl("hero/linkedin.jpg")}
          className={styles.heroImage}
          alt="hero-image"
        />
      </motion.div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
