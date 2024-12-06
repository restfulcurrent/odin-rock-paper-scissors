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
    const choice = prompt("Rock, paper or scissors?");
    return choice;
}

// // Output: Round winner via the console
// // Side effects: Increments the round winner's score
// function playRound(humanChoice, computerChoice){
//     if (humanChoice === computerChoice) {
//         console.log("It's a tie!");
//         return;
//     }

//     const ROCK_BEATS_SCISSORS = "Rock beats scissors.";
//     const SCISSORS_BEATS_PAPER = "Scissors beats paper.";
//     const PAPER_BEATS_ROCK = "Paper beats rock.";

//     let summary;
//     let compIsWinner = true;

//     // If humanChoice equals ROCK Then 
//     if (humanChoice === ROCK) {
//         if (computerChoice === PAPER) {
//             // Computer wins, paper beats rock
//             summary = PAPER_BEATS_ROCK;
//         } else if (computerChoice === SCISSORS) {
//             // human wins, rock beats scissors
//             compIsWinner = false;
//             summary = ROCK_BEATS_SCISSORS;
//         }
//     } else if (humanChoice === PAPER) {
//         if (computerChoice === SCISSORS) {
//             summary = SCISSORS_BEATS_PAPER;
//         } else if (computerChoice === ROCK) {
//             compIsWinner = false;
//             summary = PAPER_BEATS_ROCK;
//         }
//     } else if (humanChoice === SCISSORS) {
//         if (computerChoice === ROCK) {
//             summary = ROCK_BEATS_SCISSORS;
//         } else if (computerChoice === PAPER) {
//             compIsWinner = false;
//             summary = SCISSORS_BEATS_PAPER;
//         }
//     }

//     if (compIsWinner) {
//         computerScore += 1;
//         summary = `Computer wins! ${summary}`;
//         console.log(summary);
//     } else {
//         humanScore += 1;
//         summary = `Human wins! ${summary}`;
//         console.log(summary);
//     }
// }

function playGame() {
     // Side effects: Increments the round winner's score,  
    // Outputs round winner via the console
    function playRound(humanChoice, computerChoice) {
        function capitalizeFirstLetter(text) {
            return text.at(0).toUpperCase() + text.slice(1);
        }
        
        function printWinner(winner, winnerChoice, loserChoice) {
            winner = capitalizeFirstLetter(winner);
            winnerChoice = capitalizeFirstLetter(winnerChoice);
            loserChoice = capitalizeFirstLetter(loserChoice); 

            console.log(`${winner} wins! ${winnerChoice} beats ${loserChoice}.`);
        }
        
        function printTie(choiceInCommon) {
            choiceInCommon = capitalizeFirstLetter(choiceInCommon);
            
            console.log(`It's a tie! We both chose ${choiceInCommon}.`);
        }

        humanChoice = humanChoice.toLowerCase();

        const HUMAN = "human";
        const COMPUTER = "computer";

        if (humanChoice === ROCK) {
            if (computerChoice === ROCK) {
                printTie(ROCK);
            }
            else if (computerChoice === PAPER) {
                computerScore += 1;
                printWinner(COMPUTER, PAPER, ROCK);
            } else if (computerChoice === SCISSORS) {
                humanScore += 1;
                printWinner(HUMAN, ROCK, SCISSORS);
            }
        } else if (humanChoice === PAPER) {
            if (computerChoice === PAPER) {
                printTie(PAPER);
            }
            else if (computerChoice === SCISSORS) {
                computerScore += 1;
                printWinner(COMPUTER, SCISSORS, PAPER);
            } else if (computerChoice === ROCK) {
                humanScore += 1;
                printWinner(HUMAN, PAPER, ROCK);
            }
        } else if (humanChoice === SCISSORS) {
            if (computerChoice === SCISSORS) {
                printTie(SCISSORS);
            }
            else if (computerChoice === ROCK) {
                computerScore += 1;
                printWinner(COMPUTER, ROCK, SCISSORS);
            } else if (computerChoice === PAPER) {
                humanScore += 1;
                printWinner(HUMAN, SCISSORS, PAPER);
            }
        }
    }

    function isValidChoice(choice) {
        if (choice === null || choice === undefined) {
            return false;
        }

        choice = choice.toLowerCase();

        return (choice === ROCK || choice === PAPER || choice === SCISSORS);
    }

    function printGameOver(humanScore, computerScore) {
        console.log("Thanks for playing.");
        console.log(`Final score: Human: ${humanScore} Computer: ${computerScore}`);
    }

    const ROCK = 'rock';
    const PAPER = 'paper';
    const SCISSORS = 'scissors';

    let computerScore = 0;
    let humanScore = 0;

    for (let i = 0; i < 5; i++) {
        let humanChoice;

        while(!isValidChoice(humanChoice)) {
            humanChoice = getHumanChoice();
        }

        const computerChoice = getComputerChoice();
    
        playRound(humanChoice, computerChoice);
    }  

    printGameOver(humanScore, computerScore);
}

playGame();