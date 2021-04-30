export default {
	parentDiv: {
		winningImg: 'winningImg',
		messageDiv: 'messageDiv',
		loosingImg: 'loosingImg'
	},
	boxShadow: {
		draw: '0px 10px 50px 10px rgba(233, 219, 22, 0.7)',
		win: '0px 10px 50px 10px rgba(60, 253, 22, 0.7)',
		loss: '0px 10px 50px 10px rgba(253, 22, 53, 0.7)'
	},
	img: [
		{
			rock: {
				id: 'rock',
				src: './assets/img/rock.png',
				alt: 'Rock',
				classList: [ 'rounded-circle' ],
				height: 150,
				width: 150,
				parentDiv: 'winningImg'
			}
		},
		{
			paper: {
				id: 'paper',
				src: './assets/img/paper.png',
				alt: 'Paper',
				classList: [ 'rounded-circle' ],
				height: 150,
				width: 150,
				parentDiv: 'messageDiv'
			}
		},
		{
			scissor: {
				id: 'scissor',
				src: './assets/img/scisors.png',
				alt: 'Scissor',
				classList: [ 'rounded-circle' ],
				height: 150,
				width: 150,
				parentDiv: 'loosingImg'
			}
		}
	],
	buttons: [
		{
			playAgain: {
				classList: [ 'btn', 'btn-success', 'm-2' ],
				id: 'playAgain',
				innerHTML: `<i class="fas fa-gamepad"></i> Play Again!`,
				innerText: ' Play Again!',
				parentDiv: 'buttonDiv',
				superParent: 'footerButtons'
			}
		},
		{
			resetScoreBoard: {
				classList: [ 'btn', 'btn-danger', 'm-2', 'd-none' ],
				id: 'resetScoreBoard',
				innerHTML: `<i class="fas fa-trophy"></i> Reset Score Board!`,
				innerText: ' Reset Score Board!',
				parentDiv: 'buttonDiv',
				superParent: 'footerButtons'
			}
		}
	],
	scoreBoard: [
		{
			yourScore: {
				id: 'yourScore',
				innerText: '0',
				parentDiv: 'scoreBoard',
				superParent: 'scoreBoardDiv'
			}
		},
		{
			drawScore: {
				id: 'drawScore',
				innerText: '0',
				parentDiv: 'scoreBoard',
				superParent: 'scoreBoardDiv'
			}
		},
		{
			botScore: {
				id: 'botScore',
				innerText: '0',
				parentDiv: 'scoreBoard',
				superParent: 'scoreBoardDiv'
			}
		}
	]
};
