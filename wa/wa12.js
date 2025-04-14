const newQuoteButton = document.querySelector("#js-new-quote");

newQuoteButton.addEventListener("click", getQuote);

// Useless Facts API endpoint
const endpoint = "https://uselessfacts.jsph.pl/random.json?language=en";

// Fetch and display the fact
function getQuote() {
  console.log("Button clicked!");

  fetch(endpoint)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log("Fetched fact:", data);
      displayQuote(data.text);
    })
    .catch(error => {
      console.error("Failed to fetch fact:", error);
      alert("Could not fetch a fact. Please try again later.");
    });
}

// Display the fact
function displayQuote(fact) {
  const quoteText = document.querySelector("#js-quote-text");
  quoteText.textContent = fact;

  // Clear the second div since we're not using it anymore
  const answerText = document.querySelector("#js-answer-text");
  answerText.textContent = "";
}

// Load a fact on page load
window.addEventListener("DOMContentLoaded", getQuote);

const bgColors = ["#0d0d0d", "#3d0b5c", "#001f3f", "#8b0000", "#00ff33"];
let currentBgIndex = 0;

document.getElementById("js-change-bg").addEventListener("click", () => {
    currentBgIndex = (currentBgIndex + 1) % bgColors.length;
    // Update the radial gradient with the new background color
    document.body.style.background = `radial-gradient(ellipse at bottom, ${bgColors[currentBgIndex]} 0%, #090a0f 100%)`;
  });
  
