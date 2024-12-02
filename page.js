// A function to replace all occurrences of certain words
function replaceWords() {
  const replacements = {
    "\\byou\\b": "u",               
    "\\btheir\\b": "there",          
    "\\bthere\\b": "their",         
    "\\bthey're\\b": "their"         
  };

  // Get all text nodes on the page
  function walk(node) {
    let child, next;

    switch (node.nodeType) {
      case Node.ELEMENT_NODE:
      case Node.DOCUMENT_NODE:
      case Node.DOCUMENT_FRAGMENT_NODE:
        child = node.firstChild;
        while (child) {
          next = child.nextSibling;
          walk(child);
          child = next;
        }
        break;

      case Node.TEXT_NODE:
        handleText(node);
        break;
    }
  }

  // Replace words in the text node
  function handleText(textNode) {
    let text = textNode.nodeValue;
    for (const [pattern, replacement] of Object.entries(replacements)) {
      const regex = new RegExp(pattern, "gi");
      text = text.replace(regex, replacement);
    }
    textNode.nodeValue = text;
  }

  walk(document.body); // Start the word replacement process
}

// Run the function after the page loads
window.addEventListener("load", replaceWords);
