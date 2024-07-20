let humanScore = 0;
let computerScore = 0;

let humanChoice = undefined;
let computerChoice = undefined;

const getCurrentScore = () => {
  console.log(`COMPUTER SCORE IS: ${computerScore}`);
  console.log(`YOUR SCORE IS: ${humanScore}`);
};

const getHumanChoice = () => {
  let userAnswer = prompt("What is your choice? Rock, Paper or Scissors?");
  let formattedAnswer = userAnswer.toLowerCase();
  if (formattedAnswer === "rock") {
    humanChoice = "rock";
    console.log(`Human choice is: ${humanChoice}`);
  } else if (formattedAnswer === "paper") {
    humanChoice = "paper";
    console.log(`Human choice is: ${humanChoice}`);
  } else if (formattedAnswer === "scissors") {
    humanChoice = "scissors";
    console.log(`Human choice is: ${humanChoice}`);
  } else {
    alert("INVALID ANSWER, LET'S TRY IT AGAIN:");
    return getHumanChoice();
  }
};
getHumanChoice();

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    computerChoice = "rock";
    console.log(`Computer choice is: ${computerChoice}`);
  } else if (randomNumber === 1) {
    computerChoice = "paper";
    console.log(`Computer choice is: ${computerChoice}`);
  } else {
    computerChoice = "scissors";
    console.log(`Computer choice is: ${computerChoice}`);
  }
};

getComputerChoice();

function playRound() {
  if (humanChoice === "rock" && computerChoice === "rock") {
    console.log("IT'S A MATCH YOU BOTH CHOICE ROCK");
    getCurrentScore();
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.error("YOU LOOSE PAPERS BEATS ROCK!");
    computerScore++;
    getCurrentScore();
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("YOU WIN!! ROCK BEAT SCISSORS");
    humanScore++;
    getCurrentScore();
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("YOU WIN!! PAPER BEATS ROCK");
    humanScore++;
    getCurrentScore();
  } else if (humanChoice === "paper" && computerChoice === "paper") {
    console.log("IT'S A MATCH YOU BOTH CHOICE PAPER");
    getCurrentScore();
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.error("YOU LOOSE!! SCISSORS BEAT PAPER");
    computerScore++;
    getCurrentScore();
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.error("YOU LOOSE!! ROCK BEATS SCISSORS");
    computerScore++;
    getCurrentScore();
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("YOU WIN!! SCISSORS BEATS PAPER");
    humanScore++;
    getCurrentScore();
  } else if (humanChoice === "scissors" && computerChoice === "scissors") {
    console.log("IT'S A MATCH YOU BOTH CHOICE PAPER");
    getCurrentScore();
  }
}

playRound();
