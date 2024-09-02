"use client";
import style from './page.module.scss'
import Hero from '../components/Hero';
import Description from '../components/Description';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

export default function Home() {
  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <main>
      <Hero />
      <Description />
      <Newsletter />
      <Footer />
    </main>
  );
}
