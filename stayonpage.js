function preventNavigation(event) {
    event.preventDefault(); // Prevent the default navigation behavior
    event.returnValue = ''; // Required for some browsers
    setTimeout(function() {
        // Redirect the user back to the same page
        window.location.href = window.location.href;
    }, 100); // Delay to allow the page to catch the navigation attempt
}

window.addEventListener('beforeunload', preventNavigation);
