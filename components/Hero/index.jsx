'use client'
import Image from 'next/image'
import styles from './style.module.scss'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { slideUp } from './animation';
import { motion } from 'framer-motion';

export default function Hero() {

  const slider = useRef(null);
  const firstText = useRef(null);
  const secondText = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      }, 
      x: '-500px',
    })
    requestAnimationFrame(animate);
  }, [])

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    }
    else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    requestAnimationFrame(animate);
    xPercent += 0.09 * direction;
}


  return(
    <motion.div variant={slideUp} className={styles.wrapper}>
      <Image 
        src='/images/bolu.png'
        alt='bolu'
        width={600}
        height={700}
      />
      <div data-scroll data-scroll-speed={0.1} className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Bolu Okundade -</p>
          <p ref={secondText}>Bolu Okundade -</p>
        </div>
      </div>
      <div data-scroll data-scroll-speed={0.2} className={styles.description}>
        <p>Coach</p>
        <p>Entrepreneur</p>
        <p>Business Owner</p>
      </div>
    </motion.div>
  )
}