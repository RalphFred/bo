import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "./style.module.scss";
import Rounded from "../../common/RoundedButton";

export default function Newsletter() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div ref={container} className={styles.wrapper}>
      <div className={styles.content}>
        <h1>I HAVE ALOT TO SHARE!!!</h1>

        <p>Join 1000+ subscribers who listen to me weekly</p>

        <div className={styles.inputWrapper}>
          <input type="email" placeholder="johndoe@gmail.com" />
          <div>
            <Rounded className={styles.button}>
              <p>Subscribe</p>
            </Rounded>
          </div>
        </div>
      </div>

      <motion.div style={{ height }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>
    </div>
  );
}
