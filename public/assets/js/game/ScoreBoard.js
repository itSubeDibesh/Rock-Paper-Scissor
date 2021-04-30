let player1 = 0,
	player2 = 0,
	draw = 0;

export default class ScoreBoard {
	constructor(scoreBoard, footer, th) {
		this.scoreBoard = scoreBoard;
		this.footer = footer;
		this.th = th;
	}

	show(Winner) {
		this.update(Winner);
		this.scoreBoard[0].classList.replace('d-none', 'd-block');
		this.footer[0].classList.replace('d-none', 'd-block');
	}

	hideBoard() {
		this.scoreBoard[0].classList.replace('d-block', 'd-none');
	}

	resetScore() {
		player1 = 0;
		player2 = 0;
		draw = 0;
	}

	update(winner) {
		// Reset Score Board
		if (!winner) {
			this.th[0].innerText = player1.toString();
			this.th[1].innerText = draw.toString();
			this.th[2].innerText = player2.toString();
		} else {
			const { winningPlayer } = winner;
			// Your/Player1 Score
			if (winningPlayer === 'player1') {
				player1++;
				this.th[0].innerText = player1.toString();
			}
			// Draw Count
			if (winningPlayer === 'draw') {
				draw++;
				this.th[1].innerText = draw.toString();
			}
			// Bot/Player2 Score
			if (winningPlayer === 'player2') {
				player2++;
				this.th[2].innerText = player2.toString();
			}
		}
	}
}
