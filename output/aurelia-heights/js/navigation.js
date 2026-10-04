/**
 * NAVIGATION
 * Mobile menu open/close, focus trapping, and Escape-to-close.
 */
(function () {
  const toggle = document.querySelector("[data-nav-toggle]");
  const panel = document.querySelector("[data-nav-panel]");
  const scrim = document.querySelector("[data-nav-scrim]");
  const closeBtn = document.querySelector("[data-nav-close]");
  const mobileLinks = document.querySelectorAll("[data-nav-panel] a");

  if (!toggle || !panel) return;

  let lastFocused = null;

  function openMenu() {
    lastFocused = document.activeElement;
    panel.setAttribute("data-open", "true");
    scrim.setAttribute("data-open", "true");
    toggle.setAttribute("aria-expanded", "true");
    panel.removeAttribute("inert");
    document.body.style.overflow = "hidden";
    const firstLink = panel.querySelector("a, button");
    if (firstLink) firstLink.focus();
  }

  function closeMenu() {
    panel.setAttribute("data-open", "false");
    scrim.setAttribute("data-open", "false");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    isOpen ? closeMenu() : openMenu();
  });

  closeBtn?.addEventListener("click", closeMenu);
  scrim?.addEventListener("click", closeMenu);
  mobileLinks.forEach((link) => link.addEventListener("click", closeMenu));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      closeMenu();
    }
  });

  // Nav: transparent overlay on the dark hero → solid once the hero has
  // scrolled past. Threshold is measured against the hero's actual height
  // (minus the nav's own height) so it holds up across breakpoints and if
  // hero content length changes, rather than a hardcoded pixel guess.
  const nav = document.querySelector("[data-nav]");
  const hero = document.querySelector(".hero");

  if (nav && hero && !nav.hasAttribute("data-nav-force-solid")) {
    let ticking = false;

    const getThreshold = () => {
      const navHeight = nav.offsetHeight;
      return Math.max(hero.offsetHeight - navHeight, 40);
    };

    let threshold = getThreshold();

    const applyState = () => {
      const scrolled = window.scrollY > threshold;
      nav.setAttribute("data-nav-scrolled", scrolled ? "true" : "false");
      ticking = false;
    };

    window.addEventListener("scroll", () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(applyState);
    });

    window.addEventListener("resize", () => {
      threshold = getThreshold();
    });

    applyState();
  } else if (nav) {
    // No hero on this page (e.g. an interior page reusing this header) —
    // stay solid the whole time. Set data-nav-force-solid="true" on the
    // header element to opt into this.
    nav.setAttribute("data-nav-scrolled", "true");
  }

  // ---- Scrollspy: highlight the nav link for the section in view ----
  // Matches each top-level <section id="..."> against a nav link whose
  // href ends in the same #hash — normalized so this still works when nav
  // hrefs are written as "index.html#academics" (as they are on every page
  // except index.html itself, where they're bare "#academics").
  const navSections = Array.from(document.querySelectorAll("main > section[id]"));
  const allNavLinks = Array.from(document.querySelectorAll(".nav__links a, .nav__mobile-links a"));

  if (navSections.length && allNavLinks.length && "IntersectionObserver" in window) {
    const linksByHash = new Map();
    allNavLinks.forEach((link) => {
      const href = link.getAttribute("href") || "";
      if (!href.includes("#")) return;
      const hash = "#" + href.split("#")[1];
      if (!linksByHash.has(hash)) linksByHash.set(hash, []);
      linksByHash.get(hash).push(link);
    });

    const setActive = (hash) => {
      allNavLinks.forEach((link) => link.removeAttribute("aria-current"));
      (linksByHash.get(hash) || []).forEach((link) => link.setAttribute("aria-current", "page"));
    };

    const spy = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top of the viewport among those
        // currently intersecting, so fast scrolls don't flicker between
        // adjacent sections.
        const visible = entries.filter((e) => e.isIntersecting);
        if (!visible.length) return;
        visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        const hash = "#" + visible[0].target.id;
        if (linksByHash.has(hash)) setActive(hash);
      },
      { rootMargin: `-${nav ? nav.offsetHeight + 10 : 90}px 0px -60% 0px`, threshold: 0 }
    );

    navSections.forEach((section) => {
      if (linksByHash.has("#" + section.id)) spy.observe(section);
    });
  }
})();
