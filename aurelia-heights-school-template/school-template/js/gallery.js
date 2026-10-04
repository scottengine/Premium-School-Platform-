/**
 * GALLERY LIGHTBOX
 * Accessible modal viewer for gallery images. Built to work with the
 * generated placeholder blocks (.ph) — swap in <img> tags and this
 * still works unchanged, since it just clones caption/class data.
 * Filter-aware: prev/next skip over items currently hidden by a category
 * filter (see gallery-filter.js) rather than cycling through everything.
 */
(function () {
  const items = Array.from(document.querySelectorAll("[data-gallery-item]"));
  const lightbox = document.querySelector("[data-lightbox]");
  if (!items.length || !lightbox) return;

  const frame = lightbox.querySelector("[data-lightbox-frame]");
  const caption = lightbox.querySelector("[data-lightbox-caption]");
  const closeBtn = lightbox.querySelector("[data-lightbox-close]");
  const prevBtn = lightbox.querySelector("[data-lightbox-prev]");
  const nextBtn = lightbox.querySelector("[data-lightbox-next]");

  let currentIndex = 0;
  let lastFocused = null;

  function isVisible(item) {
    const wrapper = item.closest(".gallery-item");
    return !wrapper || wrapper.getAttribute("data-hidden") !== "true";
  }

  function step(index, direction) {
    // Walk forward/backward until landing on a visible item, wrapping
    // around; if everything is somehow hidden, just return the index as-is.
    let next = (index + items.length) % items.length;
    for (let i = 0; i < items.length; i++) {
      if (isVisible(items[next])) return next;
      next = (next + direction + items.length) % items.length;
    }
    return index;
  }

  function render(index, direction) {
    currentIndex = step(index, direction || 1);
    const item = items[currentIndex];
    const label = item.getAttribute("data-caption") || "";
    const variant = item.getAttribute("data-variant") || "";

    frame.querySelector(".ph").className = "ph " + variant;
    frame.querySelector(".ph").setAttribute("data-caption", label);
    caption.textContent = label;
  }

  function open(index) {
    lastFocused = document.activeElement;
    render(index);
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function close() {
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  items.forEach((item, index) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      open(index);
    });
  });

  // "View Full Gallery" triggers — optional hook: if a page has an element
  // with data-gallery-open-all, clicking it opens this page's lightbox at
  // the first image instead of navigating. Homepage now links directly to
  // gallery.html instead, so this is currently unused there but left in
  // place as reusable infrastructure for any page that wants it.
  const openAllTrigger = document.querySelector("[data-gallery-open-all]");
  openAllTrigger?.addEventListener("click", (e) => {
    e.preventDefault();
    open(0);
  });

  closeBtn.addEventListener("click", close);
  prevBtn.addEventListener("click", () => render(currentIndex - 1, -1));
  nextBtn.addEventListener("click", () => render(currentIndex + 1, 1));

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) close();
  });

  document.addEventListener("keydown", (e) => {
    if (lightbox.getAttribute("aria-hidden") === "false") {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") render(currentIndex + 1, 1);
      if (e.key === "ArrowLeft") render(currentIndex - 1, -1);
    }
  });
})();
