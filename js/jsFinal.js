
// Declare variables 
const phoneDisplay = document.getElementById('phone-display');
const inputButtons = document.getElementById('input-buttons');
let phoneNumber = "";



// Updating display func //
function updateDisplay() {
  // formatted variable
  let formatted = phoneNumber
  //ensures 10 digit endpoint with blanks
    .padEnd(10, '_')
    //characters
    .split('');
    
    //Updates html varible with the full formtted string 
  phoneDisplay.textContent = `${formatted[0]}${formatted[1]}${formatted[2]} - ${formatted[3]}${formatted[4]}${formatted[5]} - ${formatted[6]}${formatted[7]}${formatted[8]}${formatted[9]}`;
}

//buttons func// 

function createButtons() {
  inputButtons.innerHTML = ""; // Clear existing buttons

  const digits = Array.from({ length: 10 }, (_, i) => i);

  // Shuffle digits
  for (let i = digits.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [digits[i], digits[j]] = [digits[j], digits[i]];
  }

  // Create buttons in shuffled order
  digits.forEach((digit) => {
    const btn = document.createElement("div");
    btn.className = "digit-button";
    btn.textContent = digit;
    btn.addEventListener("click", () => handleDigit(digit));
    inputButtons.appendChild(btn);
  });
}






//handleDigit func//

function handleDigit(digit) {
  //sets limit of digits
  if (phoneNumber.length >= 10) {
    alert("You have already entered 10 digits!");
    return;
  }

  //index is length of phoneNumber
  const digitIndex = phoneNumber.length; // 0 for first, 1 for second, etc.


 //conditions to call errors for entering each entry in the index // 


 // Each of these are string pop ups that are saying if cancel is hit then number goes to "" and display will clear ().
  // ---- FIRST DIGIT ----
  if (digitIndex === 0) {
    if (!confirm("Is the highlighted digit correct?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();createButtons();      createButtons(); // reshuffle buttons after each entry
      return;
    }
  } 


// all of those that are >1 are within else if's 


  // ---- SECOND DIGIT ----
  else if (digitIndex === 1) {
    if (!confirm("Confirmation for second digit. Are you sure?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      
      return;
    }
    if (!confirm("To double check, are you REALLY sure?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
  } 

  // ---- THIRD DIGIT ----
  else if (digitIndex === 2) {
    if (!confirm("Onto the third digit! Did you type it correctly?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
    if (!confirm("To double check, are you REALLY sure?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
    if (!confirm("To triple check before advancing, you did it right?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
  } 

  // ---- FOURTH DIGIT ----
  else if (digitIndex === 3) {
    if (!confirm("Confirmation for fourth digit.")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
    if (!confirm("It is my only responsibility to make sure your phone number is correct, are you sure?")) {
      alert("I did my job! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
    if (!confirm("They say skepticisim is helpful, is this digit right? ")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
    if (!confirm("Please do not let me down!")) {
      alert("");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
  } 

  // ---- FIFTH DIGIT ----
  else if (digitIndex === 4) {
    if (!confirm("Good! Now if you dont mind some confirmation for the fifth digit, is this correct?.")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
    if (!confirm("I will not go down swinging, it IS right?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
    if (!confirm("Devils advocate, you did it wrong. Thats the wrooong number. Restart. Now are you really sure about this?")) {
      alert("It said devils advocate right there I wasn't serious... Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
    if (!confirm("Okay okay if you say so... DO YOU SAY SO?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
    if (!confirm("Cool, Final Confirmation for fifth digit!")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
  } 

  // ---- SIXTH DIGIT ----
  else if (digitIndex === 5) {
    if (!confirm("This is the sixth digit, is it right?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
    if (!confirm("Make sure you didnt type 6 just because its the sixth digit, did you enter it correctly?")) {
      alert("You goose, Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
    if (!confirm("Are you having fun typing the correct (!) digits?")) {
      alert("Booooo! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
    if (!confirm("Good to hear, the number you want is entered correctly?.")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
    if (!confirm("Fun fact: It is statistically proven that this is where most people enter incorrectly, did you do it right")) {
      alert("Now you are a statistic. Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
    if (!confirm("Another fun fact: There are no stastistics supporting the last claim at all, I made it up. Anyway we can move on to the next digit... right?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
  } 

  // ---- SEVENTH DIGIT ----
  else if (digitIndex === 6) {
    if (!confirm("Welcome to the seventh digit, one mistake here and someone calls the wrong number. We dont want that right?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
    if (!confirm("ERROR. YOU ENTERED INCORRECTLY")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
    if (!confirm("Kidding! You typed it in right though just to make sure?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
    if (!confirm("My buddy is asking if you put the right number in here, did you?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
    if (!confirm("Awesome. Movin- whats up? Oh he wants to double check, you entered the correct number right?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
    if (!confirm("Are you a human? That is also sure of the number you have entered?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
    if (!confirm("This is fantastic! Onto the next digit, unless you put in the wrong one in which case you should hit cancel and restart")) {
      alert("Close one! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
  } 

  // ---- EIGHTH DIGIT ----
  else if (digitIndex === 7) {
    if (!confirm("The eighth digit! did you hit the right one again?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
    if (!confirm("Does the number you chose match the 8th digit in your phone number?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
    if (!confirm("This number must be correct, it must be. It has to be. Is it? ")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
    if (!confirm("Okay I think I have to make sure one more time, is it right? ")) {
      alert("Bummer, do it right this time! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
    if (!confirm("Your finger did not slip right?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
    if (!confirm("ok phew, otherwise you would have had to restart. Keep going?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
    if (!confirm("This is starting to look like my ex's number... did you enter it right??")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
    if (!confirm("Confirm the eigth digit?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
  } 

  // ---- NINTH DIGIT ----
  else if (digitIndex === 8) {
    if (!confirm("Confirmation for ninth digit.")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
    if (!confirm("There is no war in Ba Sing Se, right?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
    if (!confirm("Good. You are up to speed. But did you enter the right number?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
    if (!confirm("My buddy is asking again if you did it right, he's quite concerned. Did you?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
    if (!confirm("Well this is great! There is not a doubt that you hit the wrong number, correct?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
    if (!confirm("I prefer to stay on the safe side, did you type it correctly?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
    if (!confirm("Do not lie to me after all of this. Did you enter it in right?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
    if (!confirm("Final confirmation for the ninth digit!")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
    if (!confirm("SIKE. Now its the Final Confirmation just to be careful.")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
  } 

  // ---- TENTH DIGIT ----
  else if (digitIndex === 9) {
    if (!confirm("I think we have come a long way since you starting filling out this required field, would you agree?")) {
      alert("See ya punk! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
    if (!confirm("I truly hope you are sure that all of your numbers have been entered correctly. That is my sole purpose.")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
    if (!confirm("I wish my verification skills could be used for something more useful, like Grammarly or CAPTCHAs. ")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
    if (!confirm("It gets lonely in this page...")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
    if (!confirm("When I signed the lease to live here the only thing listed on the floor plan was whitespace, walking distance to the (search) bar though! ")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
    if (!confirm("I think we can call each other friends right? I am only friends with people who enter their phone number correctly")) {
      alert(":( Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
    if (!confirm("As we approach the end I would like you to ask yourself a very important question, did I enter my phone number correctly?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
    if (!confirm("DID YOU?! I must fulfill my duty and deliver a correct phone number.")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
    if (!confirm("Final confirmation. This is your phone number?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }
    if (!confirm("One more thing...")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();      return;
    }

    if (!confirm("Confirm?")) {
      alert("Now we have to restart! Starting over!");
      phoneNumber = "";
      updateDisplay();
createButtons();createButtons();      return;
    }


  }

  // After all confirmations passed, on the bottom!
  phoneNumber += digit;
  updateDisplay();
createButtons();createButtons();}

//creates buttons and runs update display
createButtons();
updateDisplay();
createButtons();createButtons();