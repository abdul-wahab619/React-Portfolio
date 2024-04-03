import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";
import { motion } from "framer-motion";

const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <motion.div
      whileHover={{scale: 1.2}}
      onHoverStart={(e) => {}}
      onHoverEnd={(e) => {}}
      className={styles.container}
    >
      <motion.img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        whileHover={{ scale: 1.6 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <motion.a
          whileHover={{ scale: 1.2 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
          href={demo}
          className={styles.link}
        >
          Demo
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
          href={source}
          className={styles.link}
        >
          Source
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
