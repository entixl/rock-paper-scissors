function getComputerChoice() {
	const randomNum = Math.random();
	if (randomNum < 1 / 3) return "rock";
	else if (randomNum < 2 / 3) return "paper";
	else return "scissor";
}

function winLogic(playerChoice, computerChoice) {
	if (playerChoice === computerChoice) return "tie";
	if (
		(playerChoice === "rock" && computerChoice === "scissor") ||
		(playerChoice === "paper" && computerChoice === "rock") ||
		(playerChoice === "scissor" && computerChoice === "paper")
	)
		return "player";
	return "computer";
}

let tieCount = 0,
	computerCount = 0,
	playerCount = 0;

const rpsButtons = document.querySelectorAll(".rps-buttons > button");
const rpsDiv = document.querySelector(".rps-buttons");

const resultDiv = document.createElement("div");
resultDiv.classList.add("result");
resultDiv.textContent = "Click to start";
rpsDiv.insertAdjacentElement("beforebegin", resultDiv);

const choices = document.createElement("div");
choices.classList.add("choices");

const overallResult = document.createElement("div");
overallResult.classList.add("overall");

function playRound(playerChoice) {
	resultDiv.textContent = "Verdict: ";
	let computerChoice = getComputerChoice();
	choices.innerHTML = `Computer : ${computerChoice}<br>Player : ${playerChoice}`;
	let roundWinner = winLogic(playerChoice, computerChoice);

	if (roundWinner === "tie") {
		resultDiv.innerHTML += `It's a Tie!`;
		tieCount++;
	} else if (roundWinner === "player") {
		resultDiv.innerHTML += `You Win!`;
		playerCount++;
	} else {
		resultDiv.innerHTML += `You Lose!`;
		computerCount++;
	}

	updateOVerallResult();
}
rpsButtons.forEach((button) => {
	button.addEventListener("click", () => {
		playRound(button.classList[0]);
		rpsDiv.insertAdjacentElement("beforebegin", choices);
		restartBtn.insertAdjacentElement("beforebegin", overallResult);
		choices.style.display = "block";
		overallResult.style.display = "block";
	});
});
function restart() {
	tieCount = 0;
	computerCount = 0;
	playerCount = 0;
	resultDiv.textContent = "Click to start";
	updateOVerallResult();
	choices.style.display = "none";
	overallResult.style.display = "none";
}
const restartBtn = document.querySelector(".restart");
const overallDiv = document.querySelector(".overall-section");
restartBtn.addEventListener("click", restart);

function updateOVerallResult() {
	overallResult.innerHTML = `Tie: ${tieCount} <br>
	Loses: ${computerCount} <br>
	Wins: ${playerCount}`;
}
