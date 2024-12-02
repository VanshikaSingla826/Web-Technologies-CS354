document.getElementById("countButton").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "countWords" }, (response) => {
        if (response) {
          document.getElementById("wordCount").textContent = response.count;
        }
      });
    });
  });
  
