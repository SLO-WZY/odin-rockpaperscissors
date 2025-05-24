//Rock = 0
//Paper = 1
//Scissors = 2
let humanScore = 0
let computerScore = 0
const names = ['rock', 'paper', 'scissors']

function determineWinner(humanChoice, computerChoice) {
    const outcome = ((humanChoice-computerChoice + 3)%3)
    //adding 3 removes negative sum
    if (outcome === 0) return "draw";
    return outcome === 1? "human" : "computer";

}
function getComputerChoice() {
    output = Math.random()
    if (output<0.33) {
        return 0
    }
    if (output < 0.66) {
        return 1
    }
    return 2
}
function getHumanChoice() {
    output = prompt("pick", "rock/paper/scissors")
    output = output.toLowerCase()
    if (output === "rock")
        return 0
    if (output ==="paper")
        return 1
    return 2
    
}
function playRound(humanChoice, computerChoice) {
    console.log("Computer choice: " + names[computerChoice])
    console.log("Your choice: " + names[humanChoice])
    let winner = "none";


    if (determineWinner(humanChoice,computerChoice) == "computer") {
        console.log("You lose! " + names[computerChoice] + " beats " + names[humanChoice] + ".")
        computerScore++
    }
    
        else if (determineWinner(humanChoice,computerChoice) == "human") {
            console.log("You win! " + names[humanChoice] + " beats " + names[computerChoice] + ".")
            humanScore++
        }
        else {
            console.log("draw!")
        }
        console.log("Your score:" + humanScore)
        console.log("Computers score:" + computerScore)
}

function playGame() {
    while (humanScore < 3 && computerScore < 3) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log(humanScore > computerScore ? "You won the game!" : "Computer won the game!");
}

playGame()


