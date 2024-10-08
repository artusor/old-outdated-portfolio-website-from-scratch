// note: all of the variables are global variables
var dieRolls = prompt("How many times do you want to roll the dice?");
alert("Click the button to play!")
var die1, die2, dieSum, balance, banner, outcome, die1Name, die2Name, numRolls; // define variables
balance = 0;  // initial value
var die1Image = new Image();
var die2Image = new Image();
var rollTime = 1000
var attempts = 0


function rollDice() {
    die1 = Math.floor(Math.random() * 6) + 1;
    die2 = Math.floor(Math.random() * 6) + 1;
    dieSum = die1 + die2;

    // set the dice images based on the roll
    die1Image = document.querySelectorAll("img")[0];
    die1Name = "images/dice" + die1 + ".png";
    die1Image.setAttribute("src", die1Name);

    die2Image = document.querySelectorAll("img")[1];
    die2Name = "images/dice" + die2 + ".png";
    die2Image.setAttribute("src", die2Name);
}

function whoWon() {
    // in h3 report how much money was won or lost and the balance
    if (dieSum <= 5){
      outcome = "You lose, please pay me " + 5 + " dollars.";
      balance -= 5;
    } else if (dieSum >= 9){
      outcome = "You win, I pay you " + 5 + " dollars.";
      balance += 5;
    } else {
      outcome = "It's a draw, nobody wins or loses.";
    }

    // Report the outcome:
    banner = die1 + " + " + die2 + " is: " + dieSum;
    document.querySelector("h3").innerHTML = banner + "<br>" + outcome + "<br>" + "<br>" + "Current balance: " + balance;
}

function finalResult() {
  if (balance==0) {
    document.querySelector("h3").innerHTML = "Nobody wins anything...how boring.";
  } else if (balance<0) {
    document.querySelector("h3").innerHTML = "You lose $" + (-1*balance) + "!";
  } else {
    document.querySelector("h3").innerHTML = "You win $" + balance + "!";
  }
}

function onceLetsPlay(){
  rollDice();
  whoWon();
}

function againPlay(){
  document.querySelector(".myBtn").innerHTML = "Let's Play Again!";
}

function letsPlay(){
  attempts++
  if (attempts>=1) {
    setTimeout(againPlay, dieRolls*rollTime);
  }
  for (var i = 0; i < dieRolls; i++) {
    setTimeout(onceLetsPlay, i*rollTime);
  }
  setTimeout(finalResult, dieRolls*rollTime);
  balance=0
}
