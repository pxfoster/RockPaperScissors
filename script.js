function computerPlay() {
    let play = Math.floor((Math.random() * 3));

    switch(play)
    {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            return "Error";
    }
}

function playRound(playerSelection, computerSelection) {
    let result = 0;
    
    if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        result = 1;
    } else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        result = 1;
    }
    else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        result = 1;
    } else if(playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        result = 2;
    }

    switch(result)
        {
            case 0:
                console.log("You Lose! " + computerSelection + " beats " + playerSelection);
                break;
            case 1:
                console.log("You Win! " + playerSelection + " beats " + computerSelection);
                break;
            case 2:
                console.log("It's a tie! " + playerSelection + " ties " + computerSelection);
                break;
            default:
                console.log("Error");
                break;
        }


    return result;
}

function game() {
    //Play 5 rounds
    //Keep score
    //Report the winner or loser at the end
    //Use console log to display results of each round
    //Use prompt to get user input

    let playerScore = 0;
    let computerScore = 0;

    for(i = 0; i < 5; i++) {

       switch(playRound(prompt("Choose a hand: ", "rock"), computerPlay()))
        {
            case 0:
                computerScore++;
                break;
            case 1:
                playerScore++;
                break;
            case 2:
                break;
            default:
                console.log("Error");
                break;
        }

    }

    if(playerScore > computerScore) {
        console.log("You win with " + playerScore + " points. The computer only had " + computerScore + " points.");
    } else if(computerScore > playerScore) {
        console.log("The computer wins with " + computerScore + " points. You only had " + playerScore + " points.");
    } else if(playerScore === computerScore) {
        console.log("It was a tie! You both had " + playerScore + " points.");
    } else {
        console.log("There was an error somewhere!");
    }
}


