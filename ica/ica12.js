// Step 1: Select the button and assign to a variable
const newQuoteButton = document.querySelector("#js-new-quote");

// Step 2: Add event listener to call getQuote on click
newQuoteButton.addEventListener("click", getQuote);

// Step 4: API endpoint
const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

// Step 3: Define getQuote and console log to check if it works
function getQuote() {
  console.log("Button clicked!");

  // Step 5: Fetch from API
  fetch(endpoint)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log("Fetched trivia:", data);
      displayQuote(data.question, data.answer); // Step 8: Call displayQuote
    })
    .catch(error => {
      console.error("Failed to fetch quote:", error); // Step 7: Console error
      alert("Could not fetch trivia. Please try again later.");
    });
}

// Step 8: displayQuote function
function displayQuote(question, answer) {
  const quoteText = document.querySelector("#js-quote-text");
  const answerText = document.querySelector("#js-answer-text");

  quoteText.textContent = question;
  answerText.textContent = ""; // Clear the answer until user clicks to reveal

  // Optional: Setup show-answer button to reveal it
  const showAnswerButton = document.querySelector("#js-tweet");
  showAnswerButton.onclick = () => {
    answerText.textContent = answer;
  };
}

// Step 9: Display quote on page load
window.addEventListener("DOMContentLoaded", getQuote);
