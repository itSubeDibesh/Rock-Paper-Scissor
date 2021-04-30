const rules = {
	choice: [ 'rock', 'paper', 'scissor' ],
	rules: {
		rock_paper: 'paper',
		paper_scissor: 'scissor',
		scissor_rock: 'rock',
		scissor_scissor: 'draw',
		rock_rock: 'draw',
		paper_paper: 'draw'
	}
};

export default rules;