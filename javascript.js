
function getComputerChoice() {

    value = Math.floor(Math.random() * 3);  // 3 is for 3 choices, rock paper or scissors

    if (value == 0) {
    
        return "rock";

    }

    else if (value == 1) {

        return "paper";

    }

    else if (value == 2) {

        return "scissors";

    }

    else {

        return "choice is not valid";

    }

}

function getHumanChoice() {

    let choice = prompt("rock, paper, or scissors?");

    return choice.toLowerCase();

}


function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        if (humanChoice == "rock" && computerChoice == "scissors") {
    
            humanScore += 1;
            return console.log("You win! Rock beats scissors.");
    
        }
    
        else if (humanChoice == "scissors" && computerChoice == "rock") {
    
            computerScore += 1;
            return console.log("You lose! Rock beats scissors.");
    
        }
    
        else if (humanChoice == "paper" && computerChoice == "rock") {
    
            humanScore += 1;
            return console.log("You win! Paper beats rock.");
    
        }
    
        else if (humanChoice == "rock" && computerChoice == "paper") {
    
            computerScore += 1;
            return console.log("You lose! Paper beats rock.");
    
        }
    
        else if (humanChoice == "paper" && computerChoice == "scissors") {
    
            computerScore += 1;
            return console.log("You lose! Scissors beats paper.");
    
        }
    
        else if (humanChoice == "scissors" && computerChoice == "paper") {
    
            humanScore += 1;
            return console.log("You win! Scissors beats paper.");
    
        }
    
        else {
    
            return console.log("You tie! Try again.");
    
        }
    
    }

    for (i = 0; i < 5; i++) {

        const humanchoice = getHumanChoice();
        const compchoice = getComputerChoice();
        playRound(humanchoice, compchoice);

    }

    if (humanScore > computerScore) {

        return console.log("You are the winner! " + "Final Score: " + humanScore + ":" + computerScore);

    }

    else if (computerScore > humanScore) {

        return console.log("Computer wins! " + "Final Score: " + humanScore + ":" + computerScore);

    }

    else {

        return console.log("It's a tie!");

    }

}

playGame();

