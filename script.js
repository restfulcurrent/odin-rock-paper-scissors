// Returns "rock" "paper" or "scissors" randomly
function getComputerChoice() {
    const ROCK = "rock";
    const PAPER = "paper";
    const SCISSORS = "scissors";

    // Generate random integer from 0 (inclusive) to 2 (inclusive)
    const choice = Math.floor(Math.random() * 3);

    switch(choice) {
        case 0:
            return ROCK;
        case 1:
            return PAPER;
        case 2:
            return SCISSORS;
    }
}

// Returns the human choice
function getHumanChoice() {
    const choice = prompt("Enter your choice");
    return choice;
}

// Output: Round winner via the console
// Side effects: Increments the round winner's score
function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return;
    }

    const ROCK = 'rock'
    , PAPER = 'paper'
    , SCISSORS = 'scissors';

    const ROCK_BEATS_SCISSORS = "Rock beats scissors."
    ,  SCISSORS_BEATS_PAPER = "Scissors beats paper."
    , PAPER_BEATS_ROCK = "Paper beats rock.";


    let summary;
    let compIsWinner = true;

    // If humanChoice equals ROCK Then 
    if (humanChoice === ROCK) {
        if (computerChoice === PAPER) {
            // Computer wins, paper beats rock
            summary = PAPER_BEATS_ROCK;
        } else if (computerChoice === SCISSORS) {
            // human wins, rock beats scissors
            compIsWinner = false;
            summary = ROCK_BEATS_SCISSORS;
        }
    } else if (humanChoice === PAPER) {
        if (computerChoice === SCISSORS) {
            summary = SCISSORS_BEATS_PAPER;
        } else if (computerChoice === ROCK) {
            compIsWinner = false;
            summary = PAPER_BEATS_ROCK;
        }
    } else if (humanChoice === SCISSORS) {
        if (computerChoice === ROCK) {
            summary = ROCK_BEATS_SCISSORS;
        } else if (computerChoice === PAPER) {
            compIsWinner = false;
            summary = SCISSORS_BEATS_PAPER;
        }
    }

    if (compIsWinner) {
        computerScore += 1;
        summary = `Computer wins! ${summary}`;
        console.log(summary);
    } else {
        humanScore += 1;
        summary = `Human wins! ${summary}`;
        console.log(summary);
    }
}

let computerScore = 0;
let humanScore = 0;

const humanChoice = getHumanChoice();   // Validate
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);