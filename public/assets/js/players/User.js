import game from '../gameAssets/rules.js';

export default class User {
	constructor(choice) {
		this.choice = choice.toLowerCase();
		this.index = this.getIndex(this.choice);
	}

	/**
     * Returns Selection index
     * @param {string} selected 
     * @returns number
     */
	getIndex(selected) {
		return game.choice.indexOf(selected);
	}
}
