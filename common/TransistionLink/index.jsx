"use client";
import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "../../app/anim";

export default function TransistionLink({ href, label }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router);
    }
  };

  return (
    <button onClick={handleClick}>
      {label}
    </button>
  );
}
