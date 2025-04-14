
const newQuoteButton = document.querySelector("#js-new-quote");

newQuoteButton.addEventListener("click", getQuote);

// API endpoint
const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

//  Define getQuote 
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
