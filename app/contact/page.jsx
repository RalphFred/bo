import styles from './page.module.scss';
import ContactHeader from '../../components/ContactHeader'

export default function ContactPage() {
  return(
    <div className={styles.wrapper}>
      <ContactHeader />
    </div>
  )
}