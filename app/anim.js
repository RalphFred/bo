import gsap from "gsap";

export const animatePageIn = () => {
  const transition = document.getElementById("transistion");

  const tl = gsap.timeline();

  tl.set(transition, {
    yPercent: 0,
    display: "block", // Ensure the element is visible before the animation starts
  })
    .to(transition, {
      yPercent: 100,
      onComplete: () => {
        // Set display to none after the animation is complete
        gsap.set(transition, { display: "none" });
      },
    });
};
