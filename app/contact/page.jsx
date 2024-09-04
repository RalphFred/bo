import styles from './page.module.scss';
import ContactHeader from '../../components/ContactHeader'
import ContactForm from '../../components/ContactForm'

export default function ContactPage() {
  return(
    <div className={styles.wrapper}>
      <ContactHeader />
      <ContactForm />
    </div>
  )
}