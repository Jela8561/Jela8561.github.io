const phoneDisplay = document.getElementById('phone-display');
const inputButtons = document.getElementById('input-buttons');
let phoneNumber = "";

function updateDisplay() {
  let formatted = phoneNumber
    .padEnd(10, '_')
    .split('');
  phoneDisplay.textContent = `${formatted[0]}${formatted[1]}${formatted[2]} - ${formatted[3]}${formatted[4]}${formatted[5]} - ${formatted[6]}${formatted[7]}${formatted[8]}${formatted[9]}`;
}

function createButtons() {
  for (let i = 0; i <= 9; i++) {
    const btn = document.createElement('div');
    btn.className = 'digit-button';
    btn.textContent = i;
    btn.addEventListener('click', () => handleDigit(i));
    inputButtons.appendChild(btn);
  }
}

function handleDigit(digit) {
  if (phoneNumber.length >= 10) {
    alert("You have already entered 10 digits!");
    return;
  }

  const digitIndex = phoneNumber.length; // 0 for first, 1 for second, etc.

  // ---- FIRST DIGIT ----
  if (digitIndex === 0) {
    if (!confirm("Is the highlighted digit correct?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
  } 

  // ---- SECOND DIGIT ----
  else if (digitIndex === 1) {
    if (!confirm("Confirmation for second digit. Are you sure?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
    if (!confirm("To double check, are you REALLY sure?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
  } 

  // ---- THIRD DIGIT ----
  else if (digitIndex === 2) {
    if (!confirm("Onto the third digit! Did you type it correctly?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
    if (!confirm("To double check, are you REALLY sure?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
    if (!confirm("To triple check before advancing, you did it right?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
  } 

  // ---- FOURTH DIGIT ----
  else if (digitIndex === 3) {
    if (!confirm("Confirmation for fourth digit.")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
    if (!confirm("It is my only responsibility to make sure your phone number is correct, are you sure?")) {
      alert("I did my job! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
    if (!confirm("They say skepticisim is helpful, is this digit right? ")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
    if (!confirm("Will YOU be attending the MAYDAY protests on May 1st to mobilize against government corruption and the human rights abuses of minorities in both America and abroad?")) {
      alert("First they came for the Communists, And I did not speak out— Because I was not a Communist. Then they came for the Socialists, And I did not speak out— Because I was not a Socialist. Then they came for the trade unionists, And I did not speak out— Because I was not a trade unionist. Then they came for the Jews, And I did not speak out— Because I was not a Jew. Then they came for me— And there was no one left To speak out for me. ! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
  } 

  // ---- FIFTH DIGIT ----
  else if (digitIndex === 4) {
    if (!confirm("Good! Now some confirmation for the fifth digit, is this correct?.")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
    if (!confirm("It always is helpful to be very very careful, is it right?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
    if (!confirm("Hmm I dont know I think you might have done it incorrectly, are you sure about this?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
    if (!confirm("Okay if you say so... DO YOU SAY SO?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
    if (!confirm("Cool, Final Confirmation for fifth digit!")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
  } 

  // ---- SIXTH DIGIT ----
  else if (digitIndex === 5) {
    if (!confirm("This is the sixth digit, is it right?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
    if (!confirm("Make sure you didnt type 6 just because its the sixth digit, did you enter it correctly?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
    if (!confirm("Are you having fun?")) {
      alert("Booooo! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
    if (!confirm("Good to hear, the number you want is entered correctly?.")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
    if (!confirm("Statistically proven that this is where most people enter incorrectly, did you do it right")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
    if (!confirm("There are no stastistics supporting the last claim, I made it up. Anyway we can move on to the next digit... right?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
  } 

  // ---- SEVENTH DIGIT ----
  else if (digitIndex === 6) {
    if (!confirm("Welcome to the seventh digit, one mistake here and someone calls the wrong number. We dont want that right?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
    if (!confirm("ERROR. YOU ENTERED INCORRECTLY")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
    if (!confirm("Kidding! You typed it in right though just to make sure?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
    if (!confirm("My buddy is asking if you put the right number in here, did you?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
    if (!confirm("Awesome. Movin- whats that? Oh he wants to double check, you entered the correct numbner right?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
    if (!confirm("Are you still a human?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
    if (!confirm("This is fantastic! Onto the next digit, unless you put in the wrong one in which case you should hit cancel and restart")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
  } 

  // ---- EIGHTH DIGIT ----
  else if (digitIndex === 7) {
    if (!confirm("The eighth digit! did you hit the right one?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
    if (!confirm("Does the number you chose match the 8th digit in your phone number?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
    if (!confirm("This number must be correct, it must be. Is it? ")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
    if (!confirm("Have you hydrated today?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
    if (!confirm("Your finger did not slip right?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
    if (!confirm("ok phew, otherwise you would have had to restart. Keep going?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
    if (!confirm("This is starting to look like my ex's number... did you enter it right?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
    if (!confirm("Confirm the eigth digit?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
  } 

  // ---- NINTH DIGIT ----
  else if (digitIndex === 8) {
    if (!confirm("Confirmation for ninth digit.")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
    if (!confirm("There is no war in Ba Sing Se, right?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
    if (!confirm("Good. You are up to speed. But did you enter the right number?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
    if (!confirm("My buddy is asking again if you did it right, he's quite concerned. Did you?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
    if (!confirm("Well this is great! There is not a doubt that you hit the wrong number, correct?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
    if (!confirm("I prefer to stay on the safe side, did you type it correctly?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
    if (!confirm("Do not lie to me after all of this. Did you enter it in right?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
    if (!confirm("Final confirmation for the ninth digit!")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
    if (!confirm("SIKE. Now its the Final Confirmation just to be careful.")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
  } 

  // ---- TENTH DIGIT ----
  else if (digitIndex === 9) {
    if (!confirm("I think we have come a long way since you starting filling out this required field, would you agree?")) {
      alert("See ya punk! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
    if (!confirm("I truly hope you are sure that all of your numbers have been entered correctly. That is my sole purpose.")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
    if (!confirm("I wish my verification skills could be used for something more useful, like Grammarly or CAPTCHAs. ")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
    if (!confirm("It gets lonely in these text boxes...")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
    if (!confirm("When I signed the lease to live here the only thing listed on the floor plan was whitespace, walking distance to the (search) bar though! ")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
    if (!confirm("I think we can call each other friends right?")) {
      alert(":( Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
    if (!confirm("As we approach the end I would like you to ask yourself, did I enter my phone number correctly?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
    if (!confirm("DID YOU?! I must fulfill my duty and deliver a correct phone number.")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
    if (!confirm("Final confirmation. This is your phone number?")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }
    if (!confirm("One more thing...")) {
      alert("Cancelled! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }

    if (!confirm("Confirm? 🥹")) {
      alert("Now we have to restart! Starting over!");
      phoneNumber = "";
      updateDisplay();
      return;
    }


  }

  // After all confirmations passed
  phoneNumber += digit;
  updateDisplay();
}

createButtons();
updateDisplay();
