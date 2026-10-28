/* =========================
   PORTFOLIO INTERACTIONS
   ========================= */

// Keep editable site values together for easy customization.
const portfolioConfig = {
  ownerName: "Steven Jacob Shibu",
  currentYear: new Date().getFullYear(),
  mobileBreakpoint: 760
};

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav");
const yearElement = document.querySelector("#year");
const navigationLinks = document.querySelectorAll(".nav a");

// Display the current year automatically in the footer.
if (yearElement) {
  yearElement.textContent = portfolioConfig.currentYear;
}

// Accessible mobile navigation toggle.
if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    navigation.classList.toggle("is-open", !isExpanded);
  });

  navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      navigation.classList.remove("is-open");
    });
  });

  // Close the mobile menu when returning to desktop width.
  window.addEventListener("resize", () => {
    if (window.innerWidth > portfolioConfig.mobileBreakpoint) {
      menuToggle.setAttribute("aria-expanded", "false");
      navigation.classList.remove("is-open");
    }
  });
}

// Add a subtle reveal effect to major content blocks.
const revealTargets = document.querySelectorAll(
  ".project-card, .about-copy, .focus-item, .skills-group, .experience-note"
);

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealTargets.forEach((target) => {
    target.classList.add("reveal-on-scroll");
    revealObserver.observe(target);
  });
}
