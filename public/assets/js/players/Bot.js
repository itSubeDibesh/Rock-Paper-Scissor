import { randomNumber } from '../gameAssets/math.js';
import game from '../gameAssets/rules.js';

export default class Bot {
	constructor() {
		this.index = randomNumber();
		this.choice = game.choice[this.index];
	}
}
