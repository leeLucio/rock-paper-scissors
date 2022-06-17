const buttons = document.querySelectorAll("[data-choice]");

const roundNumber = document.querySelector(".round-number");
const points = document.querySelector(".points");
const roundOutcome = document.querySelector(".round-outcome");
const endMessage = document.querySelector(".end-message");
const restart = document.querySelector(".restart");

let pointsPlayer = 0;
let pointsComputer = 0;
let round = 0;
let ended = false;

buttons.forEach(button => {
	button.addEventListener("click", (event) => {
		if(!ended){
			let message = playRound(event.target.dataset.choice, computerPlay());
			refresh(message);
		}
	})
})

restart.addEventListener("click", () =>{
	pointsPlayer = 0;
	pointsComputer =0;
	round = -1;
	ended = false;
	refresh("");
})


let computerPlay = () => {
	let number = Math.floor(Math.random() * 3);
	switch (number) {
		case 0:
			return "rock";

		case 1:
			return "paper";

		case 2:
			return "scissors";

		default:
			return "rock";
	}
}



let playRound = (playerSelection, computerSelection) => {
	playerSelection = playerSelection.toLowerCase();
	computerSelection = computerSelection.toLowerCase();

	switch (true) {
		case (playerSelection == computerSelection):
			return "You tie!";

		case (playerSelection == "paper"):
			if (computerSelection == "rock") {
				return "You win this round! Paper beats rock";
			}
			return "You lose this round! Scissors beat paper";

		case (playerSelection == "rock"):
			if (computerSelection == "scissors") {
				return "You win this round! Rock beats scissors";
			}
			return "You lose this round! Paper beat rock";

		case (playerSelection == "scissors"):
			if (computerSelection == "paper") {
				return "You win this round! Scissors beats paper";
			}
			return "You lose this round! Rock beat scissors";
	}
}

let refresh = (roundResult) => {
	endMessage.textContent = "";

	round++;
	roundNumber.textContent = "Round " + round;
	
	roundOutcome.textContent = roundResult;

	if (roundResult.includes("You win")) {
		pointsPlayer++;
	}

	else if (roundResult.includes("You lose")) {
		pointsComputer++;
	}

	points.textContent = "PLAYER: " + pointsPlayer + "\n" + "COMPUTER: " + pointsComputer;

	if(pointsPlayer == 5 || pointsComputer ==5){
		endMessage.textContent = (pointsPlayer == 5)? "You win the game! You got 5 wins first!" : "You lose the game... Computer got 5 wins first";
		ended = true;
	}
}
