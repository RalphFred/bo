import Image from "next/image";
import styles from "./style.module.scss";

export default function ContactHeader() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <span>
          <div className={styles.imageContainer}>
            <Image
              alt={"image"}
              src="/images/img1.jpg"
              fill={true}
              className={styles.img}
            />
          </div>
          <h2>Let's have</h2>
        </span>
        <h2>a conversation</h2>
      </div>
      <div className={styles.image}>
        <div className={styles.imageContainer}>
          <Image
            alt={"image"}
            src="/images/img1.jpg"
            fill={true}
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
}
