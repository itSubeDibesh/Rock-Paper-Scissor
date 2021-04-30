import Element from './domElements/Elements.js';
import User from './players/User.js';
import Bot from './players/Bot.js';
import { winner } from './game/winner.js';
import Score from './game/scoreBoard.js';

let gameMode = true,
	scoreBoardVisible = false;

const { scoreBoard, footer, image, buttons, th, parentDiv, boxShadow } = new Element(),
	scoreBox = new Score(scoreBoard, footer, th);

// Add Event Listner to image click
image.forEach((img) => {
	img.addEventListener('click', (e) => {
		if (gameMode) {
			const user = new User(img.alt),
				bot = new Bot(),
				won = winner(user.choice, bot.choice);
			scoreBox.show(won);
			updateDomWinner(user, bot, won);
			gameMode = false;
		}
		footer[0].classList.replace('d-none', 'd-block');
	});
});

// Trigger Play Again Button
buttons[0].addEventListener('click', (e) => {
	// Reset Game Board Enabled
	if (!gameMode) {
		buttons[1].classList.replace('d-none', 'd-inline-block');
		scoreBoardVisible = false;
	}
	gameMode = true;
	resetGame();
});

// Trigger Reset ScoreBoard
buttons[1].addEventListener('click', (e) => {
	gameMode = true;
	scoreBoardVisible = true;
	scoreBox.resetScore();
	scoreBox.update();
	scoreBox.hideBoard();
	buttons[1].classList.replace('d-inline-block', 'd-none');
	footer[0].classList.replace('d-block', 'd-none');
	resetGame();
});

function updateDomWinner(user, bot, win) {
	const { won, winningPlayer } = win;
	let winning = {
			user: '',
			avatar: ''
		},
		loosing = {
			user: '',
			avatar: ''
		},
		setBoxShadow;

	if (winningPlayer === 'player1') {
		winning.user = 'You';
		winning.avatar = 'user';
		loosing.user = 'Bot';
		loosing.avatar = 'robot';
		setBoxShadow = boxShadow.win;
	}

	if (winningPlayer === 'player2') {
		winning.user = 'Bot';
		winning.avatar = 'robot';
		loosing.user = 'You';
		loosing.avatar = 'user';
		setBoxShadow = boxShadow.loss;
	}

	const winner = `<h1 class="text-success mt-4">${winning.user} Win! <i class="fas fa-${winning.avatar}"></i></h1>`,
		looser = `<h1 class="text-danger mt-4">${loosing.user} Lost! <i class="fas fa-${loosing.avatar}"></i></h1>`,
		draw = `<h1 class="text-primary mt-4">It's a Draw! <i class="fas fa-spider"></i></h1>`;

	clearParentDiv();

	if (won === 'draw') {
		parentDiv[1].innerHTML = draw;
		const img = image[bot.index];
		img.style.boxShadow = boxShadow.draw;
		parentDiv[1].append(img);
	}

	if (winningPlayer === 'player1' || winningPlayer === 'player2') {
		const uImg = image[user.index],
			bImg = image[bot.index];

		uImg.style.boxShadow = setBoxShadow;
		bImg.style.boxShadow = setBoxShadow;

		parentDiv[0].append(uImg);
		parentDiv[1].innerHTML += winner;
		parentDiv[1].innerHTML += looser;
		parentDiv[2].append(bImg);
	}
}

function clearParentDiv() {
	parentDiv.forEach((div) => {
		div.innerHTML = null;
	});
}

function resetGame() {
	clearParentDiv();
	image.forEach((img) => {
		img.style.boxShadow = '';
	});
	parentDiv.forEach((div, index) => {
		div.append(image[index]);
	});
}

//#region  Todo
/**
 * 1. Show winner in between images - Done
 * 2. Implement reset game board - Done
 * 3. Play Sounds
 * 4. Implement Player Mode
 * 4. Implement Multi Player
 * 5. Implement Online Player 
 * 5. Implement Chat Room 
 */
//#endregion