// Mobile menu toggle
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
hamburger.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("open");
  hamburger.textContent = isOpen ? "✕" : "☰";
  hamburger.setAttribute("aria-expanded", String(isOpen));
  hamburger.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});
function closeMobile() {
  mobileMenu.classList.remove("open");
  hamburger.textContent = "☰";
  hamburger.setAttribute("aria-expanded", "false");
  hamburger.setAttribute("aria-label", "Open menu");
}

// Intersection Observer for scroll animations
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  document
    .querySelectorAll(".anim-fade-up, .anim-fade-left, .anim-fade-right")
    .forEach((el) => {
      if (!el.closest(".hero")) {
        observer.observe(el);
      }
    });
} else {
  // Make everything visible immediately for reduced-motion users
  document
    .querySelectorAll(".anim-fade-up, .anim-fade-left, .anim-fade-right")
    .forEach((el) => {
      el.classList.add("visible");
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});
