function getComputerChoice() {
	const randomNum = Math.random;
	if (randomNum >= 0 && randomNum < 1 / 3) {
		return "rock";
	} else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
		return "paper";
	} else {
		return "scissor";
	}
}
function getplayerChoice() {
	return prompt("pick (rock) , (scissor) , (paper)").toLowerCase();
}
function winLogic(playerChoice, computerChoice) {
	if (playerChoice === computerChoice) return "tie";
	if (
		(playerChoice === "rock" && computerChoice === "paper") ||
		(playerChoice === "paper" && computerChoice === "scissor") ||
		(playerChoice === "scissor" && computerChoice === "rock")
	) {
		return "player";
	}
	if (
		(computerChoice === "rock" && playerChoice === "paper") ||
		(computerChoice === "paper" && playerChoice === "scissor") ||
		(computerChoice === "scissor" && playerChoice === "rock")
	) {
		return "computer";
	}
}
function playRound() {
	let computerChoice = getComputerChoice();
	let playerChoice = getplayerChoice();
	console.log(
		`Computer Choice: ${computerChoice}\nPlayer Choice: ${playerChoice}`
	);
	let roundWinner = winLogic(playerChoice, computerChoice);
	if (roundWinner === "tie") {
		console.log(
			`Tie\nComputer Choice: ${computerChoice} and Player Choice: ${playerChoice} are same lol`
		);
		tieCount++;
	}
	if (roundWinner === "player") {
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
for (let i = 0; i < 5; i++) {
	playRound();
	console.log(`Tie:${tieCount}\nWin:${playerCount}\nLosses:${computerCount}`);
}
