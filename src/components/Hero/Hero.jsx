import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import ResumePDF from "../../data/Resume.pdf";
import TypeEffect from "./TypeEffect";
import { MdOutlineContactMail } from "react-icons/md";
import { RiChatDownloadLine } from "react-icons/ri";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          {`Hi, I'm Abdul Wahab`}{" "}
          <span>
            <TypeEffect />
          </span>
        </h1>
        <p className={styles.description}>
          I'm a full-stack developer with over 2 years of experience of MERN.
          Reach out if you'd like to learn more!
        </p>
        <div className={styles.linksBtn}>
          <motion.a
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            href="mailto:awminhas619@gmail.com"
            className={styles.contactBtn}
          >
            Contact <MdOutlineContactMail />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            className={styles.contactBtn}
            href={ResumePDF}
            download="Resume.pdf"
          >
            Download CV <RiChatDownloadLine />
          </motion.a>
        </div>
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
