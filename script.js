playGame();

function playGame() {
    const ROCK = 'rock';
    const PAPER = 'paper';
    const SCISSORS = 'scissors';

    let computerScore = 0;
    let humanScore = 0;

    const header = document.createElement("h1");
    header.textContent = "Rock Paper Scissors";
    document.body.appendChild(header);

    // Display the running score
    const score = document.createElement("div");
    score.setAttribute("class", "score");
    score.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
    document.body.appendChild(score);

    // Create rock, paper, scissors buttons
    const buttons = createButtons();
    document.body.appendChild(buttons);
    buttons.addEventListener("click", playRoundWithCorrectHumanChoice);

    // Display result of the latest round
    const result = document.createElement("div");
    result.setAttribute("class", "result");
    result.textContent = "";
    document.body.appendChild(result);

    // Plays a round of rock paper scissors, displays results, 
    // updates running tally and ends game if someone's score > 5
    function playRound(humanChoice, computerChoice) {
        const HUMAN = "human";
        const COMPUTER = "computer";

        if (humanChoice === ROCK) {
            if (computerChoice === ROCK) {
                displayTie(ROCK);
            }
            else if (computerChoice === PAPER) {
                computerScore += 1;
                displayWinner(COMPUTER, PAPER, ROCK);
            } else if (computerChoice === SCISSORS) {
                humanScore += 1;
                displayWinner(HUMAN, ROCK, SCISSORS);
            }
        } else if (humanChoice === PAPER) {
            if (computerChoice === PAPER) {
                displayTie(PAPER);
            }
            else if (computerChoice === SCISSORS) {
                computerScore += 1;
                displayWinner(COMPUTER, SCISSORS, PAPER);
            } else if (computerChoice === ROCK) {
                humanScore += 1;
                displayWinner(HUMAN, PAPER, ROCK);
            }
        } else if (humanChoice === SCISSORS) {
            if (computerChoice === SCISSORS) {
                displayTie(SCISSORS);
            }
            else if (computerChoice === ROCK) {
                computerScore += 1;
                displayWinner(COMPUTER, ROCK, SCISSORS);
            } else if (computerChoice === PAPER) {
                humanScore += 1;
                displayWinner(HUMAN, SCISSORS, PAPER);
            }
        }

        // Check if game is finished
        const WINNING_SCORE = 5;
        if (humanScore >= WINNING_SCORE || computerScore >= WINNING_SCORE) {
            endGame();
        }

        score.textContent = `Human: ${humanScore} Computer: ${computerScore}`;

        function capitalizeFirstLetter(text) {
            return text.at(0).toUpperCase() + text.slice(1);
        }
        
        function displayWinner(winner, winnerChoice, loserChoice) {
            winner = capitalizeFirstLetter(winner);
            winnerChoice = capitalizeFirstLetter(winnerChoice);
            loserChoice = capitalizeFirstLetter(loserChoice); 

            result.textContent = `${winner} wins! ${winnerChoice} beats ${loserChoice}.`;
        }
        
        function displayTie(choiceInCommon) {
            choiceInCommon = capitalizeFirstLetter(choiceInCommon);
            
            result.textContent = `It's a tie! We both chose ${choiceInCommon}.`;
        }

        // Ends the game and prompts to restart
        function endGame() {
            const gameOver = document.createElement("div");
            gameOver.setAttribute("class", "game-over");

            if (humanScore > computerScore) {
                gameOver.textContent = " Game over! Human wins!";
            } else {
                gameOver.textContent = " Game over! Computer wins!";
            }

            document.body.appendChild(gameOver);

            buttons.removeEventListener("click", playRoundWithCorrectHumanChoice);

            const restart = document.createElement("button");
            restart.textContent = "Restart";
            restart.setAttribute("class", "restart");
            restart.addEventListener("click", clearGame);
            document.body.appendChild(restart);

            // Callback function tthat clears game
            function clearGame(event) {
                document.body.removeChild(restart);
                document.body.removeChild(gameOver);
                result.textContent = "";
                humanScore = 0;
                computerScore = 0;
                score.textContent = `Human Score: ${humanScore} Computer Score: ${computerScore}`;
                buttons.addEventListener("click", playRoundWithCorrectHumanChoice);
            }
        }
    }

    // Callback function that extracts the human's selection via buttons 
    // calls playRound with appropriate humanChoice value
    function playRoundWithCorrectHumanChoice(event) {
        const target = event.target;
        
        switch (target.id) {
            case ROCK:
                playRound(ROCK, getComputerChoice());
                break;
            case PAPER:
                playRound(PAPER, getComputerChoice());
                break;
            case SCISSORS:
                playRound(SCISSORS, getComputerChoice());
                break;
        }
    }

    // Returns "rock" "paper" or "scissors" randomly
    function getComputerChoice() {
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

    // Creates 3 buttons for rock, paper, scissors
    // Returns a reference to a container containing the buttons
    function createButtons() {
        const buttons = document.createElement("div");
        buttons.setAttribute("class", "buttons");
        
        const rockBtn = document.createElement("button");
        rockBtn.textContent = "Rock";
        rockBtn.setAttribute("id", ROCK);
        buttons.appendChild(rockBtn);
        
        const paperBtn = document.createElement("button");
        paperBtn.textContent = "Paper";
        paperBtn.setAttribute("id", PAPER);
        buttons.appendChild(paperBtn);
        
        const scissorsBtn = document.createElement("button");
        scissorsBtn.textContent = "Scissors";
        scissorsBtn.setAttribute("id", SCISSORS);
        buttons.appendChild(scissorsBtn);

        return buttons;
    }
}