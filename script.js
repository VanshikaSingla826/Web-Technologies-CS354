// Uncheck the item
function changeToUnchecked(questionName) {
    const id = currentAnswer[questionName];
    const index = "[data-choice-id='" + id + "']";
    const items = document.querySelectorAll(index);
    for (let item of items) {
        if (item.dataset.questionId === questionName) {
            const image = item.querySelector('.checkbox');
            image.src = 'images/unchecked.png'; // Set checkbox image to unchecked
            item.style.backgroundColor = '#f4f4f4'; // Reset background color
            item.style.opacity = '0.6'; // Set opacity to dim for unselected items
        }
    }
}

// Changing the opacity of unchosen images
function changeOpacity(question, itemNoChange) {
    const index = "[data-question-id='" + question + "']";
    const items = document.querySelectorAll(index);
    for (let item of items) {
        if (item !== itemNoChange) {
            item.style.opacity = '0.6'; // Dim unselected items
        } else {
            item.style.opacity = '1'; // Reset opacity for the selected item
        }
    }
}

function refreshWeb() {
    document.location.href = "index.html";
}

// Users cannot change the answer when three questions are already picked, then show the result
function lockToAnswer() {
    if (currentAnswer['one'] && currentAnswer['two'] && currentAnswer['three']) {
        for (let item of itemList) {
            item.removeEventListener('click', changeToChecked); // Remove click event listeners
        }
        let output = document.querySelector('.result');
        let outputTitle = document.querySelector('.result #result-title');
        let outputContent = document.querySelector('.result #result-contents');
        
        // Show result based on answers
        if (currentAnswer['three'] === currentAnswer['two']) {
            outputTitle.innerHTML = "You got: " + RESULTS_MAP[currentAnswer['two']]['title'];
            outputContent.innerHTML = RESULTS_MAP[currentAnswer['two']]['contents'];
        } else {
            outputTitle.innerHTML = "You got: " + RESULTS_MAP[currentAnswer['one']]['title'];
            outputContent.innerHTML = RESULTS_MAP[currentAnswer['one']]['contents'];
        }
        
        output.style.display = 'block'; // Display result section
        const restartBtn = document.querySelector('#restart-quiz');
        restartBtn.addEventListener('click', refreshWeb); // Add event listener to restart button
    }
}

// Change the item to the checked status
function changeToChecked(event) {
    const item = event.currentTarget;
    const image = item.querySelector('.checkbox');
    const questionPicked = item.dataset.questionId; // Get the question ID for the clicked item

    // Check if the item is already selected
    if (currentAnswer[questionPicked] === item.dataset.choiceId) {
        // If already selected, uncheck it
        changeToUnchecked(questionPicked);
        currentAnswer[questionPicked] = ''; // Reset the answer for this question
        changeOpacity(questionPicked, null); // Update opacity for other items after deselecting
    } else {
        // If not selected, check the item
        changeToUnchecked(questionPicked); // Uncheck any previously selected item
        image.src = 'images/checked.png'; // Set checkbox image to checked
        item.style.backgroundColor = '#cfe3ff'; // Change background color
        item.style.opacity = '1'; // Reset opacity for selected item
        currentAnswer[questionPicked] = item.dataset.choiceId; // Set the current answer
        changeOpacity(questionPicked, item); // Update opacity of other items
    }

    lockToAnswer(); // Check if all questions are answered
}

var currentAnswer = {
    'one': '',
    'two': '',
    'three': ''
};

var itemList = document.querySelectorAll('.choice-grid div');
for (const item of itemList) {
    item.addEventListener('click', changeToChecked); // Add event listener for click
}
