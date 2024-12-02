function countWords() {
  const text = document.body.innerText || ""; // Get the visible text
  const words = text.match(/\w+('\w+)?/g); // Match words, including contractions
  return words ? words.length : 0; // Return the word count
}

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "countWords") {
      const wordCount = countWords();
      sendResponse({ count: wordCount });
  }
});
