let userScore = 0; 
let compScore = 0;
let msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
 
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    let randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = (compChoice) => {
    msg.innerText = `It's a draw! Computer also chose ${compChoice}.`;
    msg.style.backgroundColor = "yellow";
} 

const userWin = (compChoice) => {
    msg.innerText = `You won! Computer chose ${compChoice}.`;
    userScore = userScore + 1;
    document.querySelector("#your-score").innerText = `${userScore}`;
        msg.style.backgroundColor = "green";

}

const compWin = (compChoice) => {
    msg.innerText = `Computer won! It chose ${compChoice}.`;
    compScore = compScore + 1;
    document.querySelector("#comp-score").innerText = `${compScore}`;
        msg.style.backgroundColor = "red";

}

const playGame = (userChoice) => {
    let compChoice = genCompChoice();

    if (compChoice === userChoice) {
        drawGame(compChoice);
    } else if (
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "scissors" && compChoice === "paper") ||
        (userChoice === "paper" && compChoice === "rock")
    ) {
        userWin(compChoice);
    } else {
        compWin(compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
