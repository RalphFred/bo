import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const animatePageIn = () => {
  const transition = document.getElementById("transistion");

  const tl = gsap.timeline();

  // tl.set(transition, {
  //   yPercent: 100, // Start below the screen
  //   display: "block", // Ensure the element is visible
  // })
  // .to(transition, {
  //   yPercent: 0, // Move it up to cover the screen
  //   duration: 0.5,
  //   ease: "power2.inOut",
  // })
  // // Slide down to reveal the new page
  // .to(transition, {
  //   delay: 0.5,
  //   yPercent: -100, // Slide down off the screen
  //   duration: 0.5,
  //   ease: "power2.inOut",
  // })
  // .set(transition, {
  //   display: "none", // Hide the element after animation
  // });

  tl.set(transition, {
    yPercent: 0,
  })
    .to(transition, {
      yPercent: 100,
    })
    // .set(transition, {
    //   display: "none", 
    // });
};

export const animatePageOut = (href, AppRouterInstance) => {
  const transition = document.getElementById("transistion");

  const tl = gsap.timeline();

  tl.set(transition, {
    yPercent: -100,
  })
    .to(transition, {
      yPercent: 0,
      onComplete: () => {
        Router.push(href)
      }
    })
    // .set(transition, {
    //   display: "none", 
    // });
};
