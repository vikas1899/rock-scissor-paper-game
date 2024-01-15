// Initialize scores
let userScore = 0;
let compScore = 0;

// Select elements from the DOM
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

// Function to display a draw message
const drawGame = () => {
  msg.innerText = "Game Draw! Play again.";
  msg.style.backgroundColor = "rgb(44, 56, 56)";
};

// Function to generate computer choice
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randInx = Math.floor(Math.random() * 3);
  return options[randInx];
};

// Function to display the winner
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.style.backgroundColor = "green";
    msg.innerText = `You won! Your ${userChoice} beats ${compChoice}`;
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

// Function to play the game
const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;

    // Refactored the logic for determining the winner
    if (
      (userChoice === "rock" && compChoice === "paper") ||
      (userChoice === "paper" && compChoice === "scissors") ||
      (userChoice === "scissors" && compChoice === "rock")
    ) {
      userWin = false;
    }

    showWinner(userWin, userChoice, compChoice);
  }
};

// Event listeners for user choices
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
