import { TypeAnimation } from "react-type-animation";
import styles from "./Hero.module.css";

const TypeEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Web Developer",
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        "MERN Developer",
        2000,
        "Full-Stack Developer",
        2000,
        "Programmar & Coder",
        2000,
      ]}
      wrapper="span"
      speed={10}
      repeat={Infinity}
    />
  );
};
export default TypeEffect;
