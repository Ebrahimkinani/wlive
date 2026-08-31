import Script from "next/script";

const STRIP_EXTENSION_ATTRS = `
(function () {
  var PATTERN = /^(bis_|__processed_|M_ID$|data-new-gr-c-s|data-gr-ext|cz-shortcut)/;

  function strip(el) {
    if (el.nodeType !== 1) return;
    var names = el.getAttributeNames();
    for (var i = 0; i < names.length; i++) {
      var name = names[i];
      if (name === "bis_skin_checked" || PATTERN.test(name)) {
        el.removeAttribute(name);
      }
    }
  }

  function walk(root) {
    strip(root);
    var children = root.children;
    for (var i = 0; i < children.length; i++) walk(children[i]);
  }

  walk(document.documentElement);

  var observer = new MutationObserver(function (mutations) {
    for (var i = 0; i < mutations.length; i++) {
      if (mutations[i].type === "attributes") strip(mutations[i].target);
    }
  });

  observer.observe(document.documentElement, {
    subtree: true,
    attributes: true,
  });

  window.addEventListener(
    "DOMContentLoaded",
    function () {
      observer.disconnect();
    },
    { once: true }
  );
})();
`.trim();

export function StripExtensionAttrsScript() {
  return (
    <Script
      id="strip-extension-attrs"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{ __html: STRIP_EXTENSION_ATTRS }}
    />
  );
}
