let humanScore = 0;
let computerScore = 0;

let humanChoice = undefined;
let computerChoice = undefined;
let numberOfRounds = 0;

// DEFINIR DOM
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const imgPlayerOne = document.getElementById("imgPlayerOne");
const imgPlayerTwo = document.getElementById("imgPlayerTwo");
const computerText = document.getElementById("computerText");
const annoucementTitle = document.getElementById("announcementTitle");
const scorePlayerOne = document.getElementById("playerOneScore");
const scorePlayerTwo = document.getElementById("playerTwoScore");

rockBtn.addEventListener("click", () => {
  imgPlayerOne.src = "./img/rock.png";
  humanChoice = "rock";
  getComputerChoice();
  checkWinner();
});

paperBtn.addEventListener("click", () => {
  imgPlayerOne.src = "./img/paper.png";
  humanChoice = "paper";
  getComputerChoice();
  checkWinner();
});

scissorsBtn.addEventListener("click", () => {
  imgPlayerOne.src = "./img/scissors.png";
  humanChoice = "scissors";
  getComputerChoice();
  checkWinner();
});

const nextStep = () => {
  if (humanScore === 5) {
    imgPlayerOne.src = "./img/thanks.png";
    imgPlayerTwo.src = "./img/thanks.png";
    annoucementTitle.textContent = "YOU WIN THIS ROUND";
    annoucementTitle.style.backgroundColor = "blue";
    computerText.textContent = "To play again restart the page";
    disabledBtns();
  } else if (computerScore === 5) {
    imgPlayerOne.src = "./img/thanks.png";
    imgPlayerTwo.src = "./img/thanks.png";
    annoucementTitle.textContent = "WE WIN THIS ROUND";
    annoucementTitle.style.backgroundColor = "blue";
    computerText.textContent = "To play again restart the page";
    disabledBtns();
  } else {
    setTimeout(() => {
      imgPlayerOne.src = "./img/loading.gif";
      imgPlayerTwo.src = "./img/loading.gif";
      annoucementTitle.textContent = "A NEW TRY";
      annoucementTitle.style.backgroundColor = "blue";
      computerText.textContent = "Waiting for you...";
    }, 1000);
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    imgPlayerTwo.src = "./img/rock.png";
    computerChoice = "rock";
    computerText.textContent = "Rock";
  } else if (randomNumber === 1) {
    imgPlayerTwo.src = "./img/paper.png";
    computerChoice = "paper";
    computerText.textContent = "Paper";
  } else {
    imgPlayerTwo.src = "./img/scissors.png";
    computerChoice = "scissors";
    computerText.textContent = "Scissors";
  }
};

const isATie = () => {
  annoucementTitle.textContent = "IT'S A TIE!";
  annoucementTitle.style.backgroundColor = "orange";
  numberOfRounds++;
  nextStep();
};

const computerWins = () => {
  computerScore++;
  scorePlayerTwo.textContent = computerScore;
  annoucementTitle.textContent = "YOU LOOSE!";
  annoucementTitle.style.backgroundColor = "red";
  numberOfRounds++;
  nextStep();
};

const userWins = () => {
  humanScore++;
  scorePlayerOne.textContent = humanScore;
  annoucementTitle.textContent = "YOU WIN!";
  annoucementTitle.style.backgroundColor = "green";
  numberOfRounds++;
  nextStep();
};

const checkWinner = () => {
  if (humanChoice === "rock" && computerChoice === "rock") {
    isATie();
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerWins();
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    userWins();
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    userWins();
  } else if (humanChoice === "paper" && computerChoice === "paper") {
    isATie();
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerWins();
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerWins();
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    userWins();
  } else if (humanChoice === "scissors" && computerChoice === "scissors") {
    isATie();
  }
};

const disabledBtns = () => {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
};
