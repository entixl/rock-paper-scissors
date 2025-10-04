function getComputerChoice() {
	const randomNum = Math.random();
	if (randomNum >= 0 && randomNum < 1 / 3) {
		return "rock";
	} else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
		return "paper";
	} else {
		return "scissor";
	}
}
// function getplayerChoice() {
// 	return prompt("pick (rock) , (scissor) , (paper)").toLowerCase();
// }
function winLogic(playerChoice, computerChoice) {
	if (playerChoice === computerChoice) return "tie";

	if (
		(playerChoice === "rock" && computerChoice === "scissor") ||
		(playerChoice === "paper" && computerChoice === "rock") ||
		(playerChoice === "scissor" && computerChoice === "paper")
	) {
		return "player";
	} else {
		return "computer";
	}
}
function playRound(playerChoice) {
	let computerChoice = getComputerChoice();
	console.log(
		`Computer Choice: ${computerChoice}\nPlayer Choice: ${playerChoice}`
	);
	let roundWinner = winLogic(playerChoice, computerChoice);
	if (roundWinner === "tie") {
		console.log(
			`Tie\nComputer Choice: ${computerChoice} and Player Choice: ${playerChoice} are same lol`
		);
		tieCount++;
	} else if (roundWinner === "player") {
		console.log(
			`You win!\nPlayer Choice: ${playerChoice} beats Computer Choice: ${computerChoice}`
		);
		playerCount++;
	} else {
		console.log(
			`You lose!\nComputer Choice: ${computerChoice} beats Player Choice: ${playerChoice}`
		);
		computerCount++;
	}
}
let tieCount = 0,
	computerCount = 0,
	playerCount = 0;
const rpsButton = document.querySelectorAll(".rps-buttons > button");
rpsButton.forEach((button) => {
	button.addEventListener("click", () => {
		playRound(button.classList[0]);
		console.log(button);
	});
});
