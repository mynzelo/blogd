function loadScript(src, callback) {
  var script = document.createElement('script');
  script.src = src;
  script.async = true;
  script.onload = function () {
    callback();
  };
  script.onerror = function () {
    console.error('Failed to load script: ' + src);
  };
  document.head.appendChild(script);
}

loadScript('https://cdn.jsdelivr.net/npm/pangu@4.0.7/dist/browser/pangu.min.js', function () {

  // 1. run at first
  pangu.spacingElementById('main');
  pangu.autoSpacingPage();

  // 2. run on change
  document.addEventListener('DOMContentLoaded', () => {
    // listen to any DOM change and automatically perform spacing via MutationObserver()
    pangu.spacingElementById('main');
    pangu.autoSpacingPage();
  });
});
