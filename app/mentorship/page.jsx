import Image from "next/image";
import styles from "./page.module.scss";

export default function MentorshipPage() {
  return (
    <div className={styles.wrapper}>
      <Image
        src="/images/img2.jpg"
        alt="Bolu Okunade"
        width={500}
        height={500}
        className={styles.image}
      />
    </div>
  );
}
