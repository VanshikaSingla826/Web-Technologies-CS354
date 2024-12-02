// Get references to form controls and text div
const fontFamilySelect = document.getElementById('font_family');
const fontSizeSelect = document.getElementById('font_size');
const italicCheckbox = document.getElementById('font_italic');
const boldCheckbox = document.getElementById('font_bold');
const underlineCheckbox = document.getElementById('font_underline');
const textDiv = document.getElementById('text');

// Function to update text styling based on selected options
function updateTextStyle() {
    // Get the selected values
    const fontFamily = fontFamilySelect.value;
    const fontSize = fontSizeSelect.value;
    const isItalic = italicCheckbox.checked;
    const isBold = boldCheckbox.checked;
    const isUnderline = underlineCheckbox.checked;

    // Apply the styles to the text div
    textDiv.style.fontFamily = fontFamily;
    textDiv.style.fontSize = fontSize;
    textDiv.style.fontStyle = isItalic ? 'italic' : 'normal';
    textDiv.style.fontWeight = isBold ? 'bold' : 'normal';
    textDiv.style.textDecoration = isUnderline ? 'underline' : 'none';
}

// Add event listeners to form controls to call updateTextStyle on change
fontFamilySelect.addEventListener('change', updateTextStyle);
fontSizeSelect.addEventListener('change', updateTextStyle);
italicCheckbox.addEventListener('change', updateTextStyle);
boldCheckbox.addEventListener('change', updateTextStyle);
underlineCheckbox.addEventListener('change', updateTextStyle);

// Initial call to set default styling based on the current selections
updateTextStyle();
