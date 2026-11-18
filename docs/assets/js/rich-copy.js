// Copy button for code blocks inside <div class="rich-copy">: puts formatted
// HTML (bullets, numbered steps, real links) and the plain text on the
// clipboard, so Outlook pastes links and plain-text apps still get clean text.
(function () {
  function escapeHtml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function linkify(s) {
    return escapeHtml(s).replace(/https?:\/\/[^\s<]+/g, function (url) {
      return '<a href="' + url + '">' + url + "</a>";
    });
  }

  // Text format: ALL CAPS heading lines, "- " or "1. " items, and indented
  // "- " subitems under an item. Blank lines end a list.
  function toHtml(text) {
    var html = [];
    var listTag = null;
    var itemOpen = false;
    var subOpen = false;

    function closeSub() {
      if (subOpen) { html.push("</ul>"); subOpen = false; }
    }
    function closeItem() {
      closeSub();
      if (itemOpen) { html.push("</li>"); itemOpen = false; }
    }
    function closeList() {
      closeItem();
      if (listTag) { html.push("</" + listTag + ">"); listTag = null; }
    }

    text.split(/\r?\n/).forEach(function (line) {
      var m = line.match(/^(\s*)(-|\d+\.)\s+(.*)$/);
      if (!line.trim()) {
        closeList();
      } else if (m && m[1].length > 0 && itemOpen) {
        if (!subOpen) { html.push("<ul>"); subOpen = true; }
        html.push("<li>" + linkify(m[3]) + "</li>");
      } else if (m) {
        var tag = m[2] === "-" ? "ul" : "ol";
        if (listTag !== tag) { closeList(); html.push("<" + tag + ">"); listTag = tag; }
        closeItem();
        html.push("<li>" + linkify(m[3]));
        itemOpen = true;
      } else if (line.trim() === line.trim().toUpperCase() && /[A-Z]/.test(line)) {
        closeList();
        html.push("<p><strong>" + escapeHtml(line.trim()) + "</strong></p>");
      } else {
        closeList();
        html.push("<p>" + linkify(line.trim()) + "</p>");
      }
    });
    closeList();
    return '<div style="font-family: Segoe UI, Arial, sans-serif; font-size: 11pt;">' +
      html.join("") + "</div>";
  }

  function showCopied() {
    var dialog = document.querySelector(".md-dialog");
    if (!dialog) return;
    var inner = dialog.querySelector(".md-dialog__inner");
    if (inner) inner.textContent = "Copied to clipboard";
    dialog.classList.add("md-dialog--active");
    setTimeout(function () { dialog.classList.remove("md-dialog--active"); }, 2000);
  }

  // Capture phase, so this runs before the theme's own copy handler.
  document.addEventListener("click", function (event) {
    var button = event.target.closest && event.target.closest(".rich-copy [data-clipboard-target]");
    if (!button) return;
    var code = button.closest("pre") && button.closest("pre").querySelector("code");
    if (!code || !navigator.clipboard) return; // let the theme copy plain text

    var text = code.innerText.replace(/\n$/, "");
    event.preventDefault();
    event.stopImmediatePropagation();

    var done;
    if (window.ClipboardItem && navigator.clipboard.write) {
      done = navigator.clipboard.write([new ClipboardItem({
        "text/html": new Blob([toHtml(text)], { type: "text/html" }),
        "text/plain": new Blob([text], { type: "text/plain" })
      })]);
    } else {
      done = navigator.clipboard.writeText(text);
    }
    done.then(showCopied, function () {
      return navigator.clipboard.writeText(text).then(showCopied);
    });
  }, true);
})();
