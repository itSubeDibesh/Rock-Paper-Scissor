import game from '../gameAssets/rules.js';
const { rules } = game;

/**
 * Checks Winnner
 * @param {string} player1Choice 
 * @param {string} player2Choice 
 * @returns string rock || paper || scissor || draw
 */
export function winner(player1Choice, player2Choice) {
	for (const key in rules) {
		if (rules.hasOwnProperty.call(rules, key)) {
			const matcher1 = `${player1Choice}_${player2Choice}`;
			const matcher2 = `${player2Choice}_${player1Choice}`;
			const matcher = selectMatcher(matcher1, matcher2, key);
			const won = rules[matcher];
			if (key === matcher) {
				return {
					won,
					winningPlayer: getWinningPlayer(player1Choice, player2Choice, won),
					matcher
				};
			}
		}
	}
}

/**
 * Returns Matcher
 * @param {string} matcher1 
 * @param {string} matcher2 
 * @param {string} key 
 * @returns string matcher1 || matcher2
 */
function selectMatcher(matcher1, matcher2, key) {
	if (matcher1 === key) return matcher1;
	else if (matcher2 === key) return matcher2;
	else 'draw';
}

/**
 * Returns Winning Player
 * @param {string} player1 
 * @param {string} player2 
 * @param {string} winner 
 * @returns 
 */
function getWinningPlayer(player1, player2, winner) {
	return player1 === winner ? 'player1' : player2 === winner ? 'player2' : 'draw';
}
