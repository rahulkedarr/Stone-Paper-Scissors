let userScore = 0;
let comScore = 0;
let drawScore = 0;
let totalGame = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const comScorePara = document.querySelector("#comp-score");
const drawScorePara = document.querySelector("#draw-match");
const totalPlayGame = document.querySelector("#total-match");

const getComputerChoice = ()=>{
    const options = ["rock" ,"paper", "scissors"]
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const drawGame = ()=>{
    msg.innerText = "Game was draw, Play again";
    msg.style.backgroundColor = "black";
    drawScore++;
    drawScorePara.innerText = drawScore; 
}

const showWinner= (userWin, userChoice, computerChoice) =>{
    if(userWin){
        userScore++
        userScorePara.innerText = userScore;
        msg.innerText =  `You Win, your choice ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        comScore++
        comScorePara.innerText = comScore; 
        msg.innerText = `Computer Win ${computerChoice} beats your choice ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    const computerChoice = getComputerChoice();
    if(userChoice === computerChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = computerChoice === "paper" ?false :true;
        }else if(userChoice === "paper"){
            userWin = computerChoice === "scissors" ?false :true;
        }else{
            userWin = computerChoice === "rock" ?false :true;
        }
        showWinner(userWin, userChoice, computerChoice)
    }

}

choices.forEach((choice) =>{
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id")
        totalGame++;
        totalPlayGame.innerText = totalGame; 
        playGame(userChoice);
    })
})