"use client"
import { useEffect } from 'react'
import styles from './page.module.scss'
import { animatePageIn } from './anim'

export default function Template({ children}) {

  useEffect(() => {
    animatePageIn()
  }, [])

  return(
    <div>
      <div id='transistion' className={styles.transistion}></div>
      {children}
    </div>
  )
}