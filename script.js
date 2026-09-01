document.addEventListener("DOMContentLoaded", () => {
  // 1. Elemen Hero (langsung dianimasikan saat halaman dimuat)
  const heroElements = document.querySelectorAll(".hero-section h1, .hero-section p");

  heroElements.forEach((element) => {
    const isHeading = element.tagName === "H1" || element.classList.contains("hero-title");
    const slideDirection = isHeading ? "slide-left" : "slide-right";

    element.classList.add(slideDirection, "is-visible");
  });

  // 2. IntersectionObserver untuk elemen di luar Hero
  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const { target } = entry;
        const isHeading = ["H1", "H2", "H3"].includes(target.tagName);
        const slideDirection = isHeading ? "slide-left" : "slide-right";

        target.classList.add(slideDirection, "is-visible");
        observerInstance.unobserve(target);
      });
    },
    { threshold: 0.15 }
  );

  // 3. Daftarkan elemen main (selain hero) ke observer
  const animatedElements = document.querySelectorAll(
    "main section:not(.hero-section) :is(h1, h2, h3, p)"
  );

  animatedElements.forEach((element) => observer.observe(element));
});
