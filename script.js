//Rock = 0
//Paper = 1
//Scissors = 2
let humanScore = 0
let computerScore = 0

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
function getHumanChoice(choice) {
            if (choice === "rock") return 0;
            if (choice === "paper") return 1;
            return 2; // scissors
        }
const buttons = document.querySelectorAll(".buttons button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (humanScore >= 3 || computerScore >= 3) {return
            //alert ze koniec, i ze mozna zresetowac pypypk
        }
        
        const humanChoice = getHumanChoice(button.className)
        const computerChoice = getComputerChoice();

        const winner = determineWinner(humanChoice, computerChoice);
        if (winner === "computer") {
            computerScore++  
            console.log("winner is " , winner)
        }
        else if (winner === "human") {
            humanScore++
            console.log("winner is " , winner)
        }
        else console.log("draw");
        const humanScoreSpan = document.getElementById("human-score");
        const computerScoreSpan = document.getElementById("computer-score");
        const roundWinner = document.getElementById("round-winner");

        humanScoreSpan.textContent = humanScore;
        computerScoreSpan.textContent = computerScore;
        roundWinner.textContent = winner;
        
    })
});


