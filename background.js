// background.js

chrome.commands.onCommand.addListener(function(command) {
  if (command === "take-screenshot") {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      var activeTab = tabs[0];
      chrome.scripting.executeScript({
        target: { tabId: activeTab.id },
        function: captureVisibleTab
      });
    });
  }
});

function captureVisibleTab() {
  chrome.tabs.captureVisibleTab(null, { format: "png" }, function(dataUrl) {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError.message);
      return;
    }
    sendScreenshotToGPT(dataUrl);
  });
}

function sendScreenshotToGPT(dataUrl) {
  // Send the screenshot data to GPT API
  // Implement this part to send the data to GPT
  // Example: Use fetch() or XMLHttpRequest to send the screenshot data to your GPT server
}

// Register service worker
chrome.runtime.onInstalled.addListener(function() {
  // No need for additional actions here for a service worker
});
