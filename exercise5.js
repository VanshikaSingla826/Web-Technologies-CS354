window.onload = function () {
    // Get references to the input fields, error message divs, submit button, and images
    const password1 = document.getElementById('password1');
    const password2 = document.getElementById('password2');
    const pw1Check = document.getElementById('pw1_check');
    const pw2Check = document.getElementById('pw2_check');
    const submitBtn = document.getElementById('submitBtn');
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');
    const image3 = document.getElementById('image3');

    // Function to validate the passwords
    function validatePasswords() {
        let valid = true;

        // Check if the first password meets the minimum length requirement
        if (password1.value.length < 6) {
            pw1Check.textContent = "Password must be at least 6 characters long.";
            valid = false;
        } else {
            pw1Check.textContent = ""; // Clear error message if the condition is met
        }

        // Check if the second password matches the first
        if (password2.value !== password1.value) {
            pw2Check.textContent = "Passwords do not match.";
            valid = false;
        } else {
            pw2Check.textContent = ""; // Clear error message if the condition is met
        }

        // Show the submit button only if both passwords are valid and match
        submitBtn.style.display = valid ? 'inline-block' : 'none';

        // Display corresponding image previews based on validation status
        image1.style.display = password1.value.length < 6 ? 'block' : 'none'; // Shows image if first password is too short
        image2.style.display = (password2.value !== password1.value) && password1.value.length >= 6 ? 'block' : 'none'; // Shows if passwords do not match
        image3.style.display = valid ? 'block' : 'none'; // Shows success image if both conditions are met
    }

    // Add event listeners for input change to validate as the user types
    password1.addEventListener('input', validatePasswords);
    password2.addEventListener('input', validatePasswords);
};
