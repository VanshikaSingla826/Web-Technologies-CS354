window.onload = function () {
    // Function to toggle the visibility of the article text
    function toggleArticle(article) {
        const textDiv = article.querySelector('.text');
        const showLink = article.querySelector('.showlink');

        if (textDiv.classList.contains('show')) {
            textDiv.classList.remove('show');
            showLink.style.display = 'block';
        } else {
            textDiv.classList.add('show');
            showLink.style.display = 'none';
        }
    }

    // Attach event listeners to all articles
    document.querySelectorAll('article').forEach(article => {
        const showLink = article.querySelector('.showlink a');
        const hideLink = article.querySelector('.text a');

        showLink.addEventListener('click', function (event) {
            event.preventDefault();
            toggleArticle(article); // Toggle show/hide for the current article
        });

        hideLink.addEventListener('click', function (event) {
            event.preventDefault();
            toggleArticle(article); // Toggle show/hide for the current article
        });
    });
};
