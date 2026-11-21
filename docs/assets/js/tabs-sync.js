// Linked content tabs (content.tabs.link) only restore the saved choice for tab
// sets that are visible when the page loads. Tab sets inside collapsed boxes
// (??? tips) keep their first tab, so a macOS learner who opens a tip would see
// the Windows tab. This script applies the saved choice (Windows/macOS,
// Autopilot/Claude Code, Your machine/Cloud - Serverless) to every tab set on
// page load and again whenever a collapsed box is opened.
(function () {
  function savedTabs() {
    try {
      if (typeof window.__md_get === "function") {
        return window.__md_get("__tabs") || [];
      }
    } catch (e) {
      /* storage blocked: keep the defaults */
    }
    return [];
  }

  function applySaved(root) {
    var tabs = savedTabs();
    if (!tabs.length) return;
    root.querySelectorAll(".tabbed-set").forEach(function (set) {
      var labels = Array.prototype.slice.call(
        set.querySelectorAll(":scope > .tabbed-labels > label")
      );
      // Most recent choice first, as Material stores it.
      for (var t = 0; t < tabs.length; t++) {
        for (var i = 0; i < labels.length; i++) {
          if (labels[i].textContent.trim() === tabs[t]) {
            var input = document.getElementById(labels[i].htmlFor);
            if (input && !input.checked) input.checked = true;
            return;
          }
        }
      }
    });
  }

  function init() {
    applySaved(document);
    document.querySelectorAll("details").forEach(function (box) {
      box.addEventListener("toggle", function () {
        if (box.open) applySaved(box);
      });
    });
  }

  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(init);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
