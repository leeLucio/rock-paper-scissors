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
				return "You win! Paper beats rock";
			}
			return "You lose! Scissors beat paper";

		case (playerSelection == "rock"):
			if (computerSelection == "scissors") {
				return "You win! Rock beats scissors";
			}
			return "You lose! Paper beat rock";

		case (playerSelection == "scissors"):
			if (computerSelection == "paper") {
				return "You win! Scissors beats paper";
			}
			return "You lose! Rock beat scissors";
	}
}

let game = () => {
	let pointsPlayer = 0;
	let pointsComputer = 0;
	let round = 0;

	while(1){
		if(pointsComputer == 5 || pointsPlayer == 5){
			break;
		}
		round++;
		console.log("Round "+round);

		let input = prompt("Enter \"rock\", \"paper\" or \"scissors\"", "");
		let computer = computerPlay();

		console.log(`You chose ${input}, computer chose ${computer}`);
		let roundResult = playRound(input, computer);
		
		console.log(roundResult);
		if(roundResult.includes("You win")){
			pointsPlayer++;
		}

		else if(roundResult.includes("You lose")){
			pointsComputer++;
		}

		console.log("Points player: "+pointsPlayer+"\n"+"Points Computer: "+pointsComputer);
	}

	console.log((pointsPlayer == 5 )? "You win! You got 5 wins first!" : "You lose... Computer got 5 wins first");
}

game();