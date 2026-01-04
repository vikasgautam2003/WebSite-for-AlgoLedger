export function initSmoothScroll() {
  if (typeof window === "undefined") return;

  import("@studio-freight/lenis").then(({ default: Lenis }) => {
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
  });
}
