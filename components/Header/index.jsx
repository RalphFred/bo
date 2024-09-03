"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import Magnetic from "../../common/Magnetic";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Rounded from "../../common/RoundedButton";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Nav from "./Nav";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function index() {
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef(null);

  useEffect(() => {
    if (isActive) {
      setIsActive(false);
    }
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(
            button.current,
            { scale: 0, duration: 0.25, ease: "power1.out" },
            setIsActive(false)
          );
        },
      },
    });
  }, []);

  return (
    <>
      <div ref={header} className={styles.wrapper}>
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={64}
            height={64}
            className={styles.logo}
          />
        </Link>

        <div className={styles.nav}>
          <Magnetic>
            <Link href="/about">
              <div className={styles.el}>
                About
                <div className={styles.indicator}></div>
              </div>
            </Link>
          </Magnetic>

          <Magnetic>
            <Link href="/mentorship">
              <div className={styles.el}>
                Mentorship
                <div className={styles.indicator}></div>
              </div>
            </Link>
          </Magnetic>

          <Magnetic>
            <Link href="/contact">
              <div className={styles.el}>
                Contact
                <div className={styles.indicator}></div>
              </div>
            </Link>
          </Magnetic>
        </div>

        <div className={styles.nav_mobile}>
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className={styles.el}
          >
            <a>Menu</a>
            <div className={styles.indicator}></div>
          </div>
        </div>
      </div>
      <div
        ref={button}
        className={`${styles.headerButtonContainer} ${
          isActive ? styles.active : ""
        }`}
      >
        <Rounded
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={`${styles.button}`}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
        </Rounded>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
