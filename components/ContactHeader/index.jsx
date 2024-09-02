import Image from "next/image";
import styles from "./style.module.scss";

export default function ContactHeader() {
  return (
    <div className={styles.wapper}>
      <div className="text">
        <span>
          <div className={styles.imageContainer}>
            <Image
              alt={"image"}
              src="/images/img1.jpg"
              width={100}
              height={100}
              className={styles.img}
            />
          </div>
          <h2>Let's have a</h2>
        </span>
      </div>
    </div>
  );
}
