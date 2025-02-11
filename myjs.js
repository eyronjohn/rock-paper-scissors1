console.log("Hello");

function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);

    if(num === 0){
        //console.log("rock");
        return "rock";
    } else if(num === 1){
        //console.log("paper");
        return "paper";
    } else if(num === 2){
        //console.log("scissor");
        return "scissor";
    }
}

function getHumanChoice(){
    let choice = prompt("Enter choice: rock/paper/scissor", "");
    //alert("You chose: " + `${choice}`);
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){

    if(humanChoice === computerChoice){
        // console.log('Draw!');
        return "draw";
    }else if((humanChoice === 'rock' && computerChoice === 'scissor')||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissor' && computerChoice === 'paper')){
        // humanScore++;
        // console.log('Human Wins!');
        return "human wins";
    }else{
        // computerScore++;
        // console.log('Computer Wins!');
        return "computer wins"
    }
}

//playRound(humanSelection, computerSelection);

function playGame(){

    for(let i = 0; i<=4; i++){
        console.log('Round: ' + `${i}`);

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        const result = playRound(humanSelection, computerSelection);

        if(result === "draw"){
            console.log("It's a tie!")
        } else if(result === "human wins") {
            humanScore++;
            console.log("You won!");
        } else{
            computerScore++;
            console.log("Bot won!");
        }
    }
    console.log("--FINAL SCORE--");
    console.log("Human:" + `${humanScore}`);
    console.log("Computer:" + `${computerScore}`);
}

playGame();

