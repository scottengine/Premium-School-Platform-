/**
 * MAIN
 * Progressive-enhancement behaviors: scroll reveal, animated stat counters,
 * footer year, and syncing a handful of operational details (phone/email/
 * WhatsApp/social links, footer copyright name) from config.js so they only
 * need to be edited in one place during a rebrand.
 */
(function () {
  const config = window.SCHOOL_CONFIG;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Sync a few config-driven details into the DOM ------------------ */
  if (config) {
    document.title = `${config.identity.name} — ${config.identity.tagline}`;

    document.querySelectorAll("[data-copyright]").forEach((el) => {
      const nameNode = document.createTextNode(` ${config.identity.name}. All rights reserved.`);
      el.childNodes[el.childNodes.length - 1].replaceWith(nameNode);
    });

    document.querySelectorAll('a[href^="tel:"]').forEach((el) => {
      el.setAttribute("href", `tel:${config.contact.phone.replace(/\s+/g, "")}`);
      if (el.textContent.match(/\+\d/)) el.textContent = config.contact.phoneDisplay;
    });

    document.querySelectorAll('a[href^="mailto:"]').forEach((el) => {
      el.setAttribute("href", `mailto:${config.contact.email}`);
      if (el.textContent.includes("@")) el.textContent = config.contact.email;
    });

    document.querySelectorAll('a[href^="https://wa.me"]').forEach((el) => {
      el.setAttribute("href", `https://wa.me/${config.contact.whatsapp.replace(/\D/g, "")}`);
    });
  }

  /* ---- Footer year ------------------------------------------------------ */
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  /* ---- Scroll reveal (IntersectionObserver, no-op if unsupported) ------ */
  if ("IntersectionObserver" in window && !prefersReducedMotion) {
    document.documentElement.classList.add("js-reveal-ready");
    const revealItems = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    revealItems.forEach((item) => observer.observe(item));
  }

  /* ---- Stat counters ----------------------------------------------------- */
  const counters = document.querySelectorAll("[data-counter]");
  if (counters.length) {
    const animateCounter = (el) => {
      const target = parseInt(el.getAttribute("data-counter"), 10);
      const suffix = el.getAttribute("data-suffix") || "+";

      if (prefersReducedMotion) {
        el.textContent = target.toLocaleString() + suffix;
        return;
      }

      const duration = 1400;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.round(target * eased);
        el.textContent = value.toLocaleString() + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    };

    if ("IntersectionObserver" in window) {
      const counterObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCounter(entry.target);
              counterObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );
      counters.forEach((el) => counterObserver.observe(el));
    } else {
      counters.forEach(animateCounter);
    }
  }
  /* ---- Back to top -------------------------------------------------- */
  const backToTop = document.querySelector("[data-back-to-top]");
  if (backToTop) {
    let ticking = false;
    const toggleVisibility = () => {
      backToTop.setAttribute("data-visible", window.scrollY > 640 ? "true" : "false");
      ticking = false;
    };
    window.addEventListener("scroll", () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(toggleVisibility);
    });
    toggleVisibility();

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    });
  }

  /* ---- Hero parallax (subtle, disabled entirely under reduced-motion) - */
  const heroMedia = document.querySelector(".hero__media .ph");
  if (heroMedia && !prefersReducedMotion && "IntersectionObserver" in window) {
    let ticking = false;
    const applyParallax = () => {
      const rect = heroMedia.parentElement.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / (rect.height || 1), 0), 1);
      heroMedia.style.transform = `translateY(${progress * 24}px)`;
      ticking = false;
    };
    const heroObserver = new IntersectionObserver(
      (entries) => {
        const inView = entries[0].isIntersecting;
        if (inView) {
          window.addEventListener("scroll", onScroll);
          applyParallax();
        } else {
          window.removeEventListener("scroll", onScroll);
        }
      },
      { threshold: 0 }
    );
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(applyParallax);
    }
    heroObserver.observe(document.querySelector(".hero"));
  }
})();
