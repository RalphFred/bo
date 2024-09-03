"use client";
import { useEffect, useRef } from 'react';
import style from './page.module.scss';
import Hero from '../components/Hero';
import Description from '../components/Description';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css'; // Import LocomotiveScroll CSS

export default function Home() {
  const scrollRef = useRef(null);
  const locomotiveScroll = useRef(null);

  useEffect(() => {
    // Ensure this code runs only on the client
    if (typeof window !== 'undefined' && scrollRef.current) {
      locomotiveScroll.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        // Add any other LocomotiveScroll options here
      });

      // Cleanup function to destroy LocomotiveScroll instance on unmount
      return () => {
        if (locomotiveScroll.current) {
          locomotiveScroll.current.destroy();
        }
      };
    }
  }, []);

  return (
    <main ref={scrollRef}>
      <Hero />
      <Description />
      <Newsletter />
      <Footer />
    </main>
  );
}
