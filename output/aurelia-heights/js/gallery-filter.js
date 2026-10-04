/**
 * FILTER TABS
 * Reusable category filtering for the Gallery and News pages. Tabs carry
 * data-filter="category-slug" (or "all"); filterable items carry
 * data-category="category-slug" on the same element gallery.js and news
 * cards already use as their outer wrapper (.gallery-item / .news-card).
 * Hides via data-hidden="true" rather than removing from the DOM, so
 * gallery.js's lightbox can still find and skip over hidden items.
 */
(function () {
  const groups = document.querySelectorAll("[data-filter-group]");

  groups.forEach((group) => {
    const tabs = Array.from(group.querySelectorAll("[data-filter]"));
    const targetSelector = group.getAttribute("data-filter-group");
    const items = Array.from(document.querySelectorAll(targetSelector));
    if (!tabs.length || !items.length) return;

    function applyFilter(category) {
      items.forEach((item) => {
        const matches = category === "all" || item.getAttribute("data-category") === category;
        item.setAttribute("data-hidden", matches ? "false" : "true");
      });
      tabs.forEach((tab) => {
        tab.setAttribute("aria-pressed", tab.getAttribute("data-filter") === category ? "true" : "false");
      });
    }

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => applyFilter(tab.getAttribute("data-filter")));
    });

    // Start on whichever tab is already marked pressed (defaults to "All").
    const initial = tabs.find((t) => t.getAttribute("aria-pressed") === "true") || tabs[0];
    applyFilter(initial.getAttribute("data-filter"));
  });
})();
