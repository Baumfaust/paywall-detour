chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("Message received from content script:", request);
    if (request.url) {
      var archiveUrl = "https://archive.ph/" + request.url;
      chrome.tabs.create({ url: archiveUrl }, function(tab) {
        console.log("Archive tab created:", tab);
        sendResponse({ success: true });
      });
    }
    return true;  // Indicates that sendResponse will be sent asynchronously
  });
  