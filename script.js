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