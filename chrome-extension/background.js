chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'checkInstalled') {
    sendResponse({ installed: true });
  }
});

