//test connection
console.log("Hello");

//player, bot score
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    if(num === 0){
        //console.log("Bot: rock");
        return "rock";
    } else if(num === 1){
        //console.log("Bot: paper");
        return "paper";
    } else if(num === 2){
        //console.log("Bot: scissor");
        return "scissor";
    }
}

function getHumanChoice() {
    const rockBtn = document.getElementById("btn1");
    const paperBtn = document.getElementById("btn2");
    const scissorBtn = document.getElementById("btn3");

    rockBtn.addEventListener("click", () => playRound('rock'));
    paperBtn.addEventListener("click", () => playRound('paper'));
    scissorBtn.addEventListener("click", () => playRound('scissor'));
}

function playRound(humanChoice){
    if(humanScore == 5){
        alert("You won this round!");
        resetScore();
        location.reload();
    }else if(computerScore == 5){
        alert("Computer won this round!");
        resetScore();
        location.reload();
    } else if(humanScore == 5 && computerScore == 5){
        alert("The game is tied!");
        resetScore();
        location.reload();
    } else{
        const computerChoice = getComputerChoice();
        const playerChoice = document.getElementById("choice");
        const clearTxt = document.getElementById("choice2");
        clearTxt.textContent = "";
        getChoice1(humanChoice);
        getChoice2(computerChoice);

        if(humanChoice === computerChoice){
            playerChoice.textContent = "It's a tie!";
        }else if((humanChoice === 'rock' && computerChoice === 'scissor')||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissor' && computerChoice === 'paper')){
            humanScore++;
            playerChoice.textContent = "You won!";
        }else{
            computerScore++;
            playerChoice.textContent = "You lost!";
        }
        displayResult();
        //displayChoice();
        //removeChoice();
    }
}

function displayResult(){
    const playerResult = document.getElementById("player");
    const compResult = document.getElementById("comp");

    playerResult.textContent = 'Player: ' + humanScore;
    compResult.textContent = 'Computer: ' + computerScore;
}

function getChoice1(humanChoice){
    const playerChoice = document.getElementById("img1");
    if(humanChoice  === 'rock'){
        playerChoice.src = "images/rock.png";
    }else if(humanChoice === 'paper'){
        playerChoice.src = "images/paper.png";
    }else if(humanChoice === 'scissor'){
        playerChoice.src = "images/scissors.png";
    }
}

function getChoice2(computerChoice){
    const botChoice = document.getElementById("img2");
    if(computerChoice  === 'rock'){
        botChoice.src = "images/rock.png";
    }else if(computerChoice === 'paper'){
        botChoice.src = "images/paper.png";
    }else if(computerChoice === 'scissor'){
        botChoice.src = "images/scissors.png";
    }
}

function resetScore(){
    humanScore = 0;
    computerScore = 0;
}

getHumanChoice();

//discard
function displayChoice(){
    const img = document.createElement("img");
    img.src = "images/rock.png";
    document.getElementById("box1").appendChild(img);
}

// function displayResult(){
//     const disp = document.getElementById("display");

//     const humanDisp = document.createElement("h4");
//     humanDisp.textContent = 'Player: ' + humanScore;

//     const compDisp = document.createElement("h4");
//     compDisp.textContent = 'Computer: ' + computerScore;

//     disp.appendChild(humanDisp);
//     disp.appendChild(compDisp);
// }