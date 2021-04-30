import { setButtons, setFooter, setImages, setScoreBoard, setTh, setParentDiv, getBoxShadow } from './fn.js';

/**
 * Returns Elements array from Dom
 */
export default class Elements {
	constructor() {
		this.buttons = [];
		this.image = [];
		this.th = [];
		this.scoreBoard = [];
		this.footer = [];
		this.parentDiv = [];
		setButtons(this.buttons);
		setImages(this.image);
		setTh(this.th);
		setScoreBoard(this.scoreBoard);
		setFooter(this.footer);
		setParentDiv(this.parentDiv);
	}

	boxShadow = getBoxShadow;
}
