function trackAction(action) {
  window.postMessage({ type: 'ACTION_TRACK', action: action }, '*');
}

// Track clicks
document.addEventListener('click', (e) => {
  let target = e.target;
  let actionDescription = `Clicked on ${target.tagName.toLowerCase()}`;
  if (target.id) actionDescription += ` with id "${target.id}"`;
  if (target.className) actionDescription += ` with class "${target.className}"`;
  trackAction(actionDescription);
});

// Track form submissions
document.addEventListener('submit', (e) => {
  trackAction(`Submitted form with id "${e.target.id}"`);
});

// Track URL changes
let lastUrl = location.href;
new MutationObserver(() => {
  const url = location.href;
  if (url !== lastUrl) {
    lastUrl = url;
    trackAction(`Navigated to ${url}`);
  }
}).observe(document, { subtree: true, childList: true });

// Track page load
window.addEventListener('load', () => {
  trackAction(`Page loaded: ${location.href}`);
});

