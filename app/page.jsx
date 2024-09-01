"use client";
import Description from "@/components/Description";
import Hero from "@/components/Hero";
import style from './page.module.scss'
import LocomotiveScroll from "locomotive-scroll";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

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
