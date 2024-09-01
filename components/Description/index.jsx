import Image from "next/image";
import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { slideUp, opacity } from './animation';
import { useRef } from "react";

export default function Description() {

  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <div ref={description} className={styles.wrapper}>
      <div className={styles.text}>
        <h1>
          You are <br />
          WEALTH-come
        </h1>
        <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
          Super smart move you made to check me out, you're a step closer to greatness than you were! I am Okunade Boluwaduro, a serial entrepreneur burning with a passion to see young people 'legitimately wealthy'.
        </motion.p>
        <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
          Through my ventures, I've seen firsthand the transformative power of innovation and hard work. My mission is to empower the next generation with the tools, knowledge, and mindset needed to achieve financial independence and success in a rapidly changing world
        </motion.p>
        <h4>Grand Commander of the Finance Republic (GCFR)</h4>
      </div>
      <div className={styles.imageWrapper} data-scroll data-scroll-speed={0.1}>
        <Image
          className={styles.image}
          src="/images/img1.jpg"
          alt="bolu"
          width={500}
          height={500}
          layout="intrinsic"
        />
      </div>
    </div>
  );
}