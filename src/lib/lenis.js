import Lenis from "@studio-freight/lenis";

export function initSmoothScroll() {
  const lenis = new Lenis({
    duration: 1.1,
    smoothWheel: true,
    smoothTouch: false
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}
